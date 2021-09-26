import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import rootStore from '@/stores';
import * as Sentry from '@sentry/react';
import { userPin } from '@/requests/common';
import { getSnapshot, applySnapshot } from 'mobx-state-tree';
let _rootStore = rootStore;

// yarn start --WHY_RENDER
if (process.env.WHY_RENDER) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    // logOnDifferentValues: true,
    trackAllPureComponents: true,
  });
}

if (window.location.host.indexOf('jd.com') !== -1) {
  Sentry.init({
    dsn: 'http://c2805976b833417497a0667dcfab8a52@sentry-ark.jdcloud.com/245',
    release: `${+new Date()}`,
    requestBodies: 'small',
  });
}

// 子午线埋点
(async function init() {
  window.jaq = [];
  if (window.location.host.includes('erp')) {
    // erp
    window.jaq.push(['account', 'JA2020_1122474']);
    await userPin().then((res) => {
      const data = res.data && res.data.data;
      window.jaq.push(['erp_account', data && data.pin]);
      if (data && data.pin) {
        Sentry.setUser({
          pin: data.pin,
          name: data.name,
        });
      }
    });
  } else {
    // passport
    window.jaq.push(['account', 'JA2020_1132475']);
  }
  window.jaq.push(['domain', 'jd.com']);

  (function () {
    const ja = document.createElement('script');
    ja.type = 'text/javascript';
    ja.async = true;
    ja.src = '//wl.jd.com/joya.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ja, s);
  })();
})();

const render = (AppContainer, store) => {
  ReactDOM.render(<AppContainer store={store} history={store.router.history} />, document.getElementById('app'));
};
render(App, _rootStore);

if (typeof module != 'undefined' && module.hot) {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const App = require('./App').default;
      render(App, _rootStore);
    });
  }
} else {
  if (import.meta.hot) {
    import.meta.hot.accept(['./App.js', './stores/root.mst.js'], ({ module, deps }) => {
      const App = deps[0].default;
      _rootStore = deps[1].default;
      // console.log(_rootStore, import.meta.hot.data.store)
      applySnapshot(_rootStore, import.meta.hot.data.store);
      render(App, _rootStore);
    });

    import.meta.hot.dispose(() => {
      import.meta.hot.data = { store: getSnapshot(_rootStore) };
    });
  }
}
