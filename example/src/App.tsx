import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckboxTree from 'react-native-checkbox-tree';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const recursiveData = [
  {
    shopReportName: 'Name 1',
    shopCode: '00001',
    shopType: '2',
    shopId: 1,
    shopName: 'Name 1',
    childs: [
      {
        shopReportName: 'Name 2',
        shopCode: '00002',
        shopType: '3',
        shopId: 2,
        shopName: 'Name 2',
        childs: [
          {
            shopReportName: 'Name 3',
            shopCode: '00003',
            shopType: '4',
            shopId: 3,
            shopName: 'Name 3',
            childs: [
              {
                shopReportName: 'Name 4',
                shopCode: '00004',
                shopType: '4',
                shopId: 4,
                shopName: 'Name 4',
              },
              {
                shopReportName: 'Name 5',
                shopCode: '00005',
                shopType: '4',
                shopId: 5,
                shopName: 'Name 5',
                childs: [
                  {
                    shopReportName: 'Name 6',
                    shopCode: '00006',
                    shopType: '4',
                    shopId: 7,
                    shopName: 'Name 6',
                    childs: [
                      {
                        shopReportName: 'Name 7',
                        shopCode: '00007',
                        shopType: '4',
                        shopId: 7,
                        shopName: 'Name 7',
                      },
                    ],
                  },
                ],
              },
              {
                shopReportName: 'Name 8',
                shopCode: '00008',
                shopType: '4',
                shopId: 8,
                shopName: 'Name 8',
              },
            ],
          },
        ],
      },
    ],
  },
];

export interface Props {}

const CheckboxTreeScreen: React.FC<Props> = (_props) => {
  const [data] = useState<any[]>(recursiveData);
  const ref: any = useRef();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.setSelectedItem([
        {
          shopReportName: 'Name 1',
          shopCode: '00001',
          shopType: '2',
          shopId: 1,
          shopName: 'Name 1',
        },
        {
          shopReportName: 'Name 2',
          shopCode: '00002',
          shopType: '3',
          shopId: 2,
          shopName: 'Name 2',
        },
      ]);
    }
  }, [ref]);

  return (
    <View style={styles.container}>
      <CheckboxTree
        ref={ref}
        data={data}
        textField="shopName"
        childField="childs"
        textStyle={styles.textStyle}
        iconColor="black"
        iconSize={26}
        openIcon={<AntDesign name="arrowdown" size={26} />}
        closeIcon={<AntDesign name="arrowright" size={26} />}
        renderItem={({ item, isSelect, isOpen, onOpen, onClose, onSelect }) => (
          <View style={styles.wrapItem}>
            {isOpen ? (
              <TouchableOpacity onPress={onClose}>
                <AntDesign size={25} name="arrowright" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onOpen}>
                <AntDesign size={25} name="arrowdown" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onSelect}>
              <Ionicons
                size={24}
                name={isSelect ? 'checkbox-outline' : 'square-outline'}
              />
            </TouchableOpacity>
            <Text style={styles.name}>{item.shopName}</Text>
          </View>
        )}
        onSelect={(item) => {
          console.log(`Selected ${item.length} item`);
        }}
      />
    </View>
  );
};

export default CheckboxTreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
  name: {
    fontSize: 20,
    marginLeft: 8,
  },
  textStyle: {
    color: 'black',
  },
});
