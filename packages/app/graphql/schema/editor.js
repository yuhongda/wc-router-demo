export const editorType = `

  # 筛选器
  type WhereData {
    code: String
    name: String
  }

  type WhereDataResponse {
    code: String
    msg: String
    success: Boolean
    data: [WhereData]
  }

  # 工作表字段
  type FieldsData {
    businessName: String
    charge: String
    code: String
    dbName: String
    description: String
    modeType: String
    modelId: Int
    name: String
    themeName: String
    fieldInfoList: [FieldInfoItem]
  }

  type CustomTag {
    code: String
    value: String
  }

  type FieldInfoItem {
    combinatorialValue: String
    customTag: [CustomTag]
    dataTimeFormat: String
    dateTimeType: String
    label: String
    fieldCode: String
    fieldName: String
    fieldType: String
    type: Int
    isDt: Int
    isIndex: Int
    isSummary: Int
    dragMark: String
    isCallEnum: String
  }

  type FieldsResponse {
    code: String
    msg: String
    success: Boolean
    data: FieldsData
  }

  # 数据渠道
  type ChannelData {
    code: String
    name: String
  }

  type ChannelDataResponse {
    code: String
    msg: String
    success: Boolean
    data: [ChannelData]
  }
`;
