import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

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

interface IProps {
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  checkIcon?: React.ReactNode;
  unCheckIcon?: React.ReactNode;
  iconSize?: number;
  iconColor: string;
  data: any[];
  textField: string;
  childField: string;
  autoSelectParents?: boolean;
  autoSelectChilds?: boolean;
  renderItem?: ({ item, isSelect, isOpen, onOpen, onClose, onSelect }: IRenderItem) => React.ReactNode;
  onSelect: (data: any) => void;
}

export type CheckboxTreeProps = IProps
