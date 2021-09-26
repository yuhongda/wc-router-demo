import { gql } from 'apollo-boost';

export const getWhereDataSchema = gql`
  query getWhereData(
    $condition: String
    $dataModelId: Int
    $fieldName: String
    $isShowAllCategory: Boolean
    $isShowAllBrand: Boolean
    $brandKey: String
    $brandValue: Int
  ) {
    getWhereData(
      condition: $condition
      dataModelId: $dataModelId
      fieldName: $fieldName
      isShowAllCategory: $isShowAllCategory
      isShowAllBrand: $isShowAllBrand
      brandKey: $brandKey
      brandValue: $brandValue
    ) {
      code
      msg
      success
      data {
        code
        name
      }
    }
  }
`;

export const getFieldsSchema = gql`
  query getFields($modelId: Int) {
    getFields(modelId: $modelId) {
      code
      msg
      success
      data {
        businessName
        code
        dbName
        description
        modeType
        modelId
        name
        fieldInfoList {
          combinatorialValue
          customTag {
            code
            value
          }
          label
          fieldCode
          fieldName
          type
          isDt
          isIndex
          dragMark
        }
      }
    }
  }
`;

export const getChannelDataSchema = gql`
  query getChannelData($modelId: Int) {
    getChannelData(modelId: $modelId) {
      code
      msg
      success
      data {
        code
        name
      }
    }
  }
`;
