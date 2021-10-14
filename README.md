## react-native-checkbox-tree
A simple and elegant checkbox tree for React Native.

## Getting started
```js
    npm install react-native-checkbox-tree react-native-vector-icons --save
```
or
```js
    yarn add react-native-checkbox-tree react-native-vector-icons
```

### IOS
```js
    cd ios && pod install
```

#### Source code demo
- [react-native-template-components](https://github.com/hoaphantn7604/react-native-template-components) A beautiful template for React Native.

### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/checkboxtree/demo.png)

#### Props

| Props              | Params               | isRequire | Description                     |
| ------------------ | -------------------- | --------- | ------------------------------- |
| data               | Array                | Yes       |                                 |
| textField          | String               | Yes       |                                 |
| childField         | String               | Yes       |                                 |
| onSelect           | (item[])=> void      | Yes       |                                 |
| style              | ViewStyle            | No        |                                 |
| textStyle          | TextStyle            | No        |                                 |
| iconSize           | Number               | No        |                                 |
| iconColor          | String               | No        |                                 |
| openIcon           | Element              | No        | Using react-native-vector-icons |
| closeIcon          | Element              | No        | Using react-native-vector-icons |
| checkIcon          | Element              | No        | Using react-native-vector-icons |
| unCheckIcon        | Element              | No        | Using react-native-vector-icons |
| renderItem         | (item)=> Element     | No        | Customize text item             |

| Method             | Description                     |
| ------------------ | ------------------------------- |
| clear              | Refresh data                    |

## Example
```javascript
  import React from 'react';
  import { StyleSheet, View } from 'react-native';
  import CheckboxTree from 'react-native-checkbox-tree';
  import AntDesign from 'react-native-vector-icons/AntDesign';

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

  const CheckboxTreenScreen = _props => {
    return (
      <View style={styles.container}>
        <CheckboxTree
          data={recursiveData}
          textField="shopName"
          childField="childs"
          textStyle={{ color: 'black' }}
          iconColor="black"
          iconSize={26}
          openIcon={<AntDesign name="arrowdown" size={26} />}
          closeIcon={<AntDesign name="arrowright" size={26} />}
          renderItem={item => (
            <View style={styles.wrapItem}>
              <AntDesign
                style={styles.iconItem}
                name="folderopen"
                size={20}
              />
              <Text style={styles.text}>{item.shopName}</Text>
            </View>
          )}
          onSelect={item => {
            console.log(`Selected ${item.length} item`);
          }}
        />
      </View>
    );
  };

  export default CheckboxTreenScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 40,
    },
    wrapItem: {
      flexDirection: 'row',
      marginVertical: 8
    },
    text: {
      fontSize: 18
    },
    iconItem:{
      marginHorizontal: 8
    }
  });
```