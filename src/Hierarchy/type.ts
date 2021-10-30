import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  openIcon?:JSX.Element;
  closeIcon?: JSX.Element;
  checkIcon?:JSX.Element;
  unCheckIcon?: JSX.Element;
  iconSize?: number;
  iconColor: string;
  data: any[];
  textField: string;
  childField: string;
  autoSelectParents?: boolean;
  autoSelectChilds?: boolean;
  renderItem?: (item: any)=> JSX.Element;
  onSelect: (data: any) => void;
}

export type Hierarchy = React.FC<Props>
