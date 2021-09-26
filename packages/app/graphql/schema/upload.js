export const uplaodType = `
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  extend type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
