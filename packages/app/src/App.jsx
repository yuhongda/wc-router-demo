import React, { useEffect, useState } from 'react';

import '@/utils/nj.config';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'mobx-react';
import { lang } from '@/i18n';
import * as init from '@/requests/initialization';
import localForage from 'localforage';
import intl from 'react-intl-universal';
import zhCN from '@/i18n/locales/zh-cn';
import enUS from '@/i18n/locales/en-us';
import antZhCN from 'antd/lib/locale-provider/zh_CN';
import antEnUS from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import { ConfigProvider, Divider, message } from 'antd';
import '@/styles/app.less';
import '@scf/scf-style/lib/echarts/ufe.theme';
import Routes from '@/router';
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import Nav, { NavKeyMap } from '@/components/Nav';
import ErrorBoundary from '@/components/ErrorBoundary';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend/dist/esm/index.js';

const antdLang = { 'zh-cn': antZhCN, 'en-us': antEnUS };

//默认中文zh-cn
const navigatorLang = 'zh-cn';

import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
const cache = new InMemoryCache();
let uri = '';
if (typeof process !== 'undefined') {
  uri = process.env.NODE_ENV != 'development' ? `${window.location.origin}/graphql` : 'http://localhost:4000/graphql';
} else {
  uri = 'http://localhost:4000/graphql';
}
const link = createUploadLink({
  uri, //__GraphQLHost,
});

const client = new ApolloClient({
  // uri: 'http://localhost:4000/graphql/',
  credentials: 'include',
  cache,
  link,
  queryDeduplication: false,
});

message.config({
  duration: 2,
  maxCount: 2,
});

const App = ({ store, history }) => {
  const [layoutMenus, setLayoutMenus] = useState([]);
  const [ctLang, setCtLang] = useState(navigatorLang);
  const [isLoading, setIsLoading] = useState(true);

  async function init() {
    await store.common.getCurrentUserInfo();
    await store.common.getChannels();
    setIsLoading(false);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <If condition={isLoading}>
      <Loading />
      <Else>
        <ApolloProvider client={client}>
          <ConfigProvider locale={antdLang[ctLang]}>
            <Provider store={store}>
              <DndProvider backend={HTML5Backend}>
                <ErrorBoundary>
                  <Router basename={window.__MICRO_APP_BASE_URL__ || '/'} history={history}>
                    {window.location.pathname.indexOf('SalesCheckList') == -1 && (
                      <>
                        <Header />
                        <Nav />
                      </>
                    )}
                    <Routes />
                  </Router>
                </ErrorBoundary>
              </DndProvider>
            </Provider>
          </ConfigProvider>
        </ApolloProvider>
      </Else>
    </If>
  );
};

export default App;
