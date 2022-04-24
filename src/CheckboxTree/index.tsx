import React, { useEffect, useImperativeHandle, useState } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { CheckboxTreeProps } from './model';
import _ from 'lodash';

const defaultProps = {
  style: {},
  textStyle: {},
  iconColor: 'black'
}

let selectItem: any[] = [];
let defaultValue: any[] = []

const CheckboxTreeComponent = React.forwardRef<any, CheckboxTreeProps>((props, ref) => {
  const {
    data,
    textField,
    childField,
    style,
    textStyle,
    iconColor = 'black',
    iconSize = 26,
    openIcon,
    closeIcon,
    checkIcon,
    unCheckIcon,
    autoSelectParents = true,
    autoSelectChilds = true,
    renderItem
  } = props;

  const [listData] = useState<any[]>(_.cloneDeep(data));
  const [key, setKey] = useState(Math.random());

  useImperativeHandle(ref, () => {
    return { clear, setSelectedItem };
  });

  const clear = () => {
    onClear(listData);
  };

  const onClear = (items: any[]) => {
    items.map((item: any) => {
      item.tick = false;
      item.show = false;
      if (item[childField]) {
        onClear(item[childField]);
      }
    })
    reload();
  };

  const setSelectedItem = (data: any[]) => {
    defaultValue = data;
    onDefault(listData, false);
  }

  const onDefault = (items: any[], tick: boolean = false) => {
    items.map((item: any) => {
      const check = _.filter(defaultValue, (e: any) => e[textField] === item[textField]).length > 0;
      if (tick) {
        item.tick = true;
      } else {
        if (check) {
          item.tick = true;
        }
      }

      if (item[childField]) {
        onDefault(item[childField], autoSelectChilds);
      }
    })
    reload();
  };


  const parent = (item: any) => {
    if (item && item[childField]) {
      const check = item[childField].filter((child: any) => !child.tick);
      if (check.length === 0) {
        item.tick = true;
      } else {
        item.tick = false;
      }
      parent(item.parent);
      reload();
    }
  };

  const onTick = (item: any) => {
    item.tick = true;
    if (autoSelectParents) {
      parent(item.parent);
    }
    if (item[childField] && autoSelectChilds) {
      item[childField].map((child: any) => onTick(child));
    }
    reload();
    console.log('tick')
  };

  const onUnTick = (item: any) => {
    item.tick = false;
    if (autoSelectParents) {
      parent(item.parent);
    }
    if (item[childField] && autoSelectChilds) {
      item[childField].map((child: any) => onUnTick(child));
    }
    reload();
    console.log('unTick')
  };

  const showChild = (item: any) => {
    item.show = !item.show;
    reload();
  };

  const reload = () => {
    setKey(Math.random());
    selectItem = [];
    selectItemTick(listData);
  };

  const selectItemTick = (data: any) => {
    data.map((item: any) => {
      if (item.tick) {
        selectItem.push(item);
      }
      if (item[childField]) {
        selectItemTick(item[childField]);
      }
    });
  };

  useEffect(() => {
    const selectedItem = _.cloneDeep(selectItem).map((e: any) => {
      delete e.parent;
      delete e.childs;
      delete e.show;
      delete e.tick;
      return e;
    });
    props.onSelect(selectedItem);
  }, [selectItem]);


  const _renderIcon = (status: boolean) => {
    if (status) {
      if (checkIcon) {
        return checkIcon;
      } else {
        return <Ionicons name='ios-checkbox-outline' size={iconSize} color={iconColor} />
      }

    } else {
      if (unCheckIcon) {
        return unCheckIcon
      } else {
        return <Ionicons name='stop-outline' size={iconSize} color={iconColor} />
      }
    }
  };

  const renderList = (item: any, childs: any, index: number) => {
    if (!item.show) {
      item.show = false;
    }
    if (!item.tick) {
      item.tick = false;
    }
    return (
      <View style={[styles.item, { marginLeft: iconSize }]} key={index}>
        {renderItem ? renderItem({ item: item, isSelect: item.tick, isOpen: item.show, onOpen: () => { showChild(item) }, onClose: () => { showChild(item) }, onSelect: () => { !item.tick ? onTick(item) : onUnTick(item) } }) : <View style={styles.rowItem}>
          {childs && childs.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                showChild(item);
              }}>
              {item.show ? openIcon ? openIcon : <Ionicons name='ios-remove' size={iconSize} color={iconColor} /> : closeIcon ? closeIcon : <Ionicons name='add-outline' size={iconSize} color={iconColor} />}
            </TouchableOpacity>
          ) : <Text style={{ width: iconSize }}>{`  `}</Text>}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              if (!item.tick) {
                onTick(item);
              } else {
                onUnTick(item);
              }
            }}>
            <View style={styles.center}>
              {_renderIcon(item.tick)}
              <Text style={[styles.name, textStyle]} numberOfLines={3}>{item[textField]}</Text>
            </View>
          </TouchableOpacity>
        </View>}
        <View style={[!item.show && { height: 0 }]}>
          {childs &&
            childs.map((data: any, index: number) => {
              if (!data.parent) {
                data.parent = item;
              }
              return renderList(data, data[childField], index);
            })}
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={listData}
        renderItem={({ item, index }) => renderList(item, item[childField], index)}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        extraData={key}
      />
    </View>
  );
});

CheckboxTreeComponent.defaultProps = defaultProps;

export default CheckboxTreeComponent;
