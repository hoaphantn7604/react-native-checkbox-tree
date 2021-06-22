import { StyleSheet } from 'react-native';
import { useScale } from '../utilsScale';

const { scale, fontScale } = useScale;

export const styles = StyleSheet.create({
    container: {
      marginLeft: - scale(20)
    },
    item: {
      marginLeft: scale(30),
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
      fontSize: scale(30),
      marginBottom: scale(5),
      width: scale(15),
    },
    name: {
      fontSize: fontScale(16),
      flex: 1
    },
    tick: {
      marginHorizontal: scale(13),
      fontSize: scale(25),
    },
    unTick: {
      marginHorizontal: scale(13),
      fontSize: scale(30),
      marginTop: 3
    },
    btn: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      borderRadius: scale(24),
      marginTop: scale(10),
      padding: scale(14)
    },
    btnName: {
      fontSize: fontScale(20),
      color: 'white',
      fontWeight: 'bold',
    },
  });