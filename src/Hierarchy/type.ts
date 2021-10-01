import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  checkIcon?:JSX.Element;
  unCheckIcon?: JSX.Element;
  iconColor: string;
  data: any[];
  textField: string;
  childField: string;
  onSelect: (data: any) => void;
}

export type Hierarchy = React.FC<Props>
