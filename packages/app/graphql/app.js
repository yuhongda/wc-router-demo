import { ApolloServer, gql } from 'apollo-server-express';
import ReportAPI from './datasource';
import Cookies from 'cookies';
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { albumType } from './schema/album';
import { categoryType } from './schema/category';
import { uplaodType } from './schema/upload';
import { editorType } from './schema/editor';
import { monitorType } from './schema/monitor';
import { getFileDetails } from './utils';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

const app = express();
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8203');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method == 'OPTIONS') res.sendStatus(200);
  else next();
});
app.use(cookieParser());

const typeDefs = gql`
  scalar JSON
  scalar JSONObject

  ${albumType}
  ${categoryType}
  ${editorType}
  ${monitorType}

  # union CategoryResponse = Response | CategoryData

  type Query {
    albums(id: Int, hasAlbum2: Boolean): [Album]
    getCategory: CategoryResponse
    getQueryCriteria(isAll: Boolean): SearchFieldsResponse
    getWhereData(
      condition: String
      dataModelId: Int
      fieldName: String
      isShowAllCategory: Boolean
      isShowAllBrand: Boolean
      brandKey: String
      brandValue: Int
    ): WhereDataResponse @deprecated(reason: "筛选器数据有动态查询接口代替")
    getFields(modelId: Int): FieldsResponse
    getChannelData(modelId: Int): ChannelDataResponse
  }

  type Mutation {
    addAlbum(album: addAlbumInput): Album
  }

  input addAlbumInput {
    "a title of the album"
    title: String

    "artist of the album"
    artist: String
  }
  ${uplaodType}
`;

const albums = [
  {
    id: 1,
    title: 'Use Your Illisions I',
    artist: "Guns N' Roses",
  },
  {
    id: 2,
    title: 'Use Your Illisions II',
    artist: "Guns N' Roses",
  },
];

const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    albums: (_source, _args) => {
      if (_args.id) {
        return albums.filter(item => item.id == _args.id);
      } else {
        return albums;
      }
    },
    getCategory: async (_source, _args, { dataSources }) => {
      return dataSources.reportAPI.getCategory();
    },
    getWhereData: async (_source, _args, { dataSources }) => {
      const {
        condition,
        dataModelId,
        fieldName,
        isShowAllCategory,
        categoryLevel,
        isShowAllBrand,
        brandKey,
        brandValue,
      } = _args;
      return dataSources.reportAPI.getWhereData({
        condition: JSON.parse(condition),
        dataModelId,
        fieldName,
        isShowAllCategory,
        categoryLevel,
        isShowAllBrand,
        brandKey,
        brandValue,
      });
    },
    getFields: async (_source, _args, { dataSources }) => {
      const { modelId } = _args;

      if (!modelId) {
        return null;
      }

      return dataSources.reportAPI.getFields({
        modelId,
      });
    },
    getChannelData: async (_source, _args, { dataSources }) => {
      const { modelId } = _args;

      if (!modelId) {
        return null;
      }

      return dataSources.reportAPI.getChannelData({
        modelId,
      });
    },
    // getQueryCriteria: async (_source, _args, { dataSources }) => {
    //   const { isAll } = _args;
    //   return dataSources.reportAPI.getQueryCriteria({
    //     isAll,
    //   });
    // },
  },
  Mutation: {
    uploadFile: async (parent, args) => {
      console.log(args.file);
      return getFileDetails(args.file).then(file => {
        return file;
      });
      // return args.file.then(file => {
      //   //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
      //   //file.stream is a node stream that contains the contents of the uploaded file
      //   //node stream api: https://nodejs.org/api/stream.html
      //   return file;
      // });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  dataSources: () => {
    return {
      reportAPI: new ReportAPI(),
    };
  },
  context({ req, res }) {
    return {
      cookies: req.cookies,
      headers: req.headers,
    };
  },
});
server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:8203',
    credentials: true,
  },
});

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
