export interface SalesListItem {
  id?: number | null;
  keyword?: string | null;
  producttName?: string | null;
  brandName?: string | null;
  jdCate?: string | null;
  trendIndex?: number | null;
  commentIndex?: number | null;
  jdIndex?: number | null;
  tmIndex?: number | null;
  createTime?: number | null;
  [key: string]: any;
}
