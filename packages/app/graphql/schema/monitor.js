export const monitorType = `
  type monitorFieldsData {
    dataSources: JSONObject
    firstGrabTimes: [String]
    productTops: JSONObject
    productTypes: JSONObject
    saleInJdValues: JSONObject
    sortPatterns: JSONObject
  }

  type SearchFieldsResponse {
    code: String
    msg: String
    success: Boolean
    data: monitorFieldsData
  }
`;