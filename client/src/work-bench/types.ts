export enum ECompType {
  BASIC = '基础表单项'
}

export interface IDragContainerProps {
  schema: Array<IDrageItem>;
  selected: string;
  onReorder: (form: number, to: number) => void;
  onRemove: (removeIndex: number) => void;
  onSelected: (id: string) => void;
}

export interface IDrageItem {
  id: string;
  type: string;
  component: string;
  name: string;
  required?: boolean;
  label?: string;
  withoutLabel?: boolean;
  placeholder?: string;
}

export interface IActionBarProps {
  selectedItem: IDrageItem;
  onChange: (item: Partial<IDrageItem>) => void;
}