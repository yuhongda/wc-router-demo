import React from 'react';
import WCApp, { WCAppProps } from '../WCApp';
import { ReactBaseElement } from '../common/wc/ReactBaseElement';
import { CacheProvider } from '@emotion/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { ConfigProvider } from 'antd';
import { as } from '../../utils';
import rootStore, { StoreContext } from '../../stores';
import antZhCN from 'antd/lib/locale-provider/zh_CN';
const { defaultProps } = WCApp;

export default class WcShell extends ReactBaseElement {
  public data = defaultProps;
  private emotionCache: EmotionCache;
  public rootNode;

  constructor() {
    super();

    this.emotionCache = createCache({
      key: 'wc-app-css',
      container: as(this.shadowRoot)
    });
  }

  private antdLang = { 'zh-cn': antZhCN };

  public render = () => {
    return (
      <CacheProvider value={this.emotionCache}>
        <ConfigProvider locale={this.antdLang['zh-cn']} getPopupContainer={triggerNode => as(this.shadowRoot)}>
          <StoreContext.Provider value={rootStore}>
            {/* <link rel="stylesheet" type="text/css" href="http://unpkg.jd.com/@scf/wc-app-style/wc-app.css" /> */}
            {/* <link rel="stylesheet" type="text/css" href="http://static.360buyimg.com/npd-platform-static/antd-4.4.2.min.css" /> */}
            <WCApp {...this.data} />
          </StoreContext.Provider>
        </ConfigProvider>
      </CacheProvider>
    );
  };
}
