import { gql } from 'apollo-boost';

export const getSearchFieldsSchema = gql`
  query getQueryCriteria($isAll: Boolean) {
    getQueryCriteria(isAll: $isAll) {
      code
      msg
      success
      data {
        dataSources
        firstGrabTimes
        productTops
        productTypes
        saleInJdValues
        sortPatterns
      }
    }
  }
`;

// 两个应该能通过参数合成一个，但是没成功，先这样吧
export const getEasySearchFieldsSchema = gql`
  query getQueryCriteria($isAll: Boolean) {
    getQueryCriteria(isAll: $isAll) {
      code
      msg
      success
      data {
        dataSources
      }
    }
  }
`;

