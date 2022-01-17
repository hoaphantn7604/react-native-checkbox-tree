import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface RenderItem {
  item: any;
  isSelect: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSelect: () => void;
}

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  checkIcon?: JSX.Element;
  unCheckIcon?: JSX.Element;
  iconSize?: number;
  iconColor: string;
  data: any[];
  textField: string;
  childField: string;
  autoSelectParents?: boolean;
  autoSelectChilds?: boolean;
  renderItem?: ({ item, isSelect, isOpen, onOpen, onClose, onSelect }: RenderItem) => JSX.Element;
  onSelect: (data: any) => void;
}

export type Hierarchy = React.FC<Props>
