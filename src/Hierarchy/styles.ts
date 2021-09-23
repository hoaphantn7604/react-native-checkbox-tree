import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      marginLeft: - 20
    },
    item: {
      marginLeft: 26,
      marginVertical: 6
    },
    rowItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    center: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    showIcon: {
      width: 26,
    },
    name: {
      fontSize: 18,
      flex: 1,
      marginHorizontal: 8
    },
    btn: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      borderRadius: 24,
      marginTop: 10,
      padding: 14
    },
    btnName: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
  });
