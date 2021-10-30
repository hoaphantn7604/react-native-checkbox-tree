import React, { useEffect, useImperativeHandle, useState } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { Hierarchy } from './type';


const defaultProps = {
  style: {},
  textStyle: {},
  iconColor: 'black'
}

let selectItem: any[] = [];
let defaultValue: any[] = []

const HierarchyComponent: Hierarchy = React.forwardRef((props, ref) => {
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

  const [listData] = useState<any>(data);
  const [key, setKey] = useState(Math.random());

  useImperativeHandle(ref, () => {
    return { clear, setSelectedItem };
  });

  const clear = () => {
    onClear(listData[0]);
  };

  const onClear = (item: any) => {
    item.tick = false;
    item.show = false;
    if (item[childField]) {
      item[childField].map((child: any) => onClear(child));
    }
    reload();
  };

  const setSelectedItem = (data: any[]) => {
    defaultValue = data;
    onDefault(listData[0]);
  }

  const onDefault = (item: any) => {
    const check = defaultValue.findIndex(e => e[textField] === item[textField]);
    if (check >= 0) {
      item.tick = true;
    }
    if (item[childField] && autoSelectChilds) {
      item[childField].map((child: any) => onDefault(child));
    }
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
    props.onSelect(selectItem);
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
        <View style={styles.rowItem}>
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
              {renderItem ? renderItem(item) : <Text style={[styles.name, textStyle]} numberOfLines={3}>{item[textField]}</Text>}
            </View>
          </TouchableOpacity>
        </View>
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

HierarchyComponent.defaultProps = defaultProps;

export default HierarchyComponent;


