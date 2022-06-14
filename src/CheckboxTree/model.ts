import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ICheckboxTreeRef {
  clear: () => void;
  setSelectedItem: (any: any[]) => void;
}

interface IRenderItem {
  item: any;
  isSelect: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSelect: () => void;
}

export interface CheckboxTreeProps {
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
  renderItem?: ({
    item,
    isSelect,
    isOpen,
    onOpen,
    onClose,
    onSelect,
  }: IRenderItem) => JSX.Element;
  onSelect: (data: any) => void;
}
