module.exports = {
  dev: {
    host: 'localhost',
    port: 8203,
  },
  // dev: {
  //   host: 'c2m-open-ps-test.jd.com',
  //   port: 8203,
  // },

  mock: {
    express: {
      port: 8292,
    },
    local: {
      context: [
        // '/common',
        '/formExample',
        '/chartExample',
        '/defaultExample',
        '/SlideEditor',
        '/reportDetails',
        // '/api',  // 切换本地 mock
        '/library',
        '/reportEditor',
        //{localContext}//
      ],
      target: `http://localhost:8292`,
    },
    remote: [
      {
        context: ['/mock/140'],
        target: `http://yapi.jd.com`,
      },
      {
        context: ['/crm'],
        target: `http://21.22.34.221:8876`,
        secure: false,
        changeOrigin: true,
      },
      {
        context: ['/api'],
        // target: 'http://c2m-open-service-test.jd.com/',
        target: 'http://c2m-open-pre-test.jd.com/',
        // target: 'http://c2m-open-pre.jd.com/',
        // target: 'http://c2m-open-service-pre-jdos.jd.com/',
        secure: false,
        changeOrigin: true,
      },

      // {
      //   context: ['/api/common/getChannelByUserAndModel'],
      //   target: 'http://npdopen.jd.com/',
      //   secure: false,
      //   changeOrigin: true,
      // },
      // {
      //   context: ['/api/model'],
      //   target: 'http://c2m-open-pre.jd.com/',
      //   secure: false,
      //   changeOrigin: true,
      // },
      // {
      //   context: ['/api/material'],
      //   target: 'http://c2m-open.jd.com/',
      //   secure: false,
      //   changeOrigin: true,
      // },
      // {
      //   context: ['/api/reportPage'],
      //   target: 'http://c2m-open.jd.com/',
      //   secure: false,
      //   changeOrigin: true,
      // },
    ],
  },

  page: {
    pageNum: 1,
    pageSize: 10,
    pageSizeOptions: ['10', '20', '30', '50'],
  },

  //测试登录url
  loginTestHost: 'http://test.ssa.jd.com/sso/login?ReturnUrl=',
  //生产登录url
  loginProdHost: 'http://ssa.jd.com/sso/login?ReturnUrl=',
  logoutProdHost: 'http://ssa.jd.com/sso/logout?ReturnUrl=',
  loginProdHostPassport: 'https://passport.jd.com/uc/login?ReturnUrl=',
  logoutProdHostPassport: 'https://passport.jd.com/uc/login?ltype=logout&ReturnUrl=',

  lessModifyVars: {},

  //配置routerPath,apiPath,urlPath的前缀使用(接入中台使用)
  appCode: '/',
  // 示例: appCode: '/domain/basic/auth/',
  e2e: {
    timeout: 30000,
    pageTimeout: 3000,
    headless: true,
  },
};
