const toMap = array => array.reduce((r, { value, label }) => ({ ...r, [value]: label }), {});

//统一管理开发期使用的枚举常量值
export const GENDER = [{ value: '1', label: '男' }, { value: '0', label: '女' }];
export const GENDER_MAP = toMap(GENDER);

export const DATA_HISTORY_DATE_FORMAT = 'YYYY-MM-DD';
