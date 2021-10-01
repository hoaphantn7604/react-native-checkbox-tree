## react-native-checkbox-tree
A simple and elegant checkbox tree for React Native.

#### Source code demo
- [react-native-template-components](https://github.com/hoaphantn7604/react-native-template-components) A beautiful template for React Native.

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
| checkIcon          | Element              | No        | Using react-native-vector-icons |
| unCheckIcon        | Element              | No        | Using react-native-vector-icons |
| iconColor          | String               | No        |                                 |

## Example
```javascript
    import React from 'react';
    import {StyleSheet, View} from 'react-native';
    import CheckboxTree from 'react-native-checkbox-tree';

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

    const RecursiveScreen = _props => {
        return (
            <View style={styles.container}>
            <CheckboxTree
                data={recursiveData}
                textField="shopCode"
                childField="childs"
                textStyle={{color: 'black', fontWeight: 'bold'}}
                iconColor="black"
                onSelect={item => {
                    console.log(`Selected ${item.length} item`);
                }}
            />
            </View>
        );
    };

    export default RecursiveScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 40,
        },
    });

```