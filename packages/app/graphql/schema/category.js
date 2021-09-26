export const categoryType = `
  type Category {
    label: String
    value: String
    children: [Category]
  }

  type CategoryResponse {
    code: String
    msg: String
    success: Boolean
    data: [Category]
  }
`;