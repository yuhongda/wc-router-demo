export type ValueType = (string | number)[];

export type TreeNode = {
  parent?: TreeNode | null;
  children?: TreeNode[];
  value: string | number;
  title: string;
};
