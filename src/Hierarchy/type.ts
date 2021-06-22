import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  fontFamily?: string;
  iconColor: string;
  data: any[];
  textField: string;
  childField: string;
  onSelect: (data: any) => void;
}

export type Hierarchy = React.FC<Props>
