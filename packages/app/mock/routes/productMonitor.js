const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.post('/getQueryCriteria', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
   data: {
      "dataSources": {"天猫小黑盒":20301,"淘宝心选":20302,"小米有品":410,"网易严选":402},
      "productTypes":{"新品":1,"全部":null},
      "saleInJdValues":{"全部":null,"是":1,"否":0},
      "sortPatterns":{"按销量降序":"sale_cnt","按销售金额降序":"gmv"},
      "productTops":{"TOP20":20,"TOP50":50,"TOP80":80,"TOP100":100},
      "firstGrabTimes":["2020-05","2020-04","2020-03","2020-02","2020-01","2019-12"],
    },
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

router.post('/getSpuWithSkus', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
   data: 0 ? {} : {"skusInfo":[{"cate4Name":"普通路由器","cate3Name":"路由器","cateName":"普通路由器","enabled":1,"dt":"2020-05-31","gmv":2076572.00,"itemName":"华为无线wifi6+路由器","price":229.00,"imageUrl": null,"property":"[{\"keyName\":\"套餐类型\",\"keyText\":\"标准配置\",\"keyValue\":\"5919063:3284564\"},{\"keyName\":\"颜色分类\",\"keyText\":\"白色\",\"keyValue\":\"1627207:28320\"}]","id":174952,"cate1Id":"3","cate2Id":"50018264","cate3Id":"124238002","cate4Id":"110808","cate1Name":"手机数码","cate5Id":"-999","brandName":"Huawei/华为","url":"http://item.taobao.com/item.htm?id=616046270334","itemSkuName":"标准配置 白色","itemId":"616046270334","saleCnt":9068,"cate2Name":"网络设备/网络相关","cate5Name":"-999","cateId":"110808","itemSkuId":"4342690649630","brandId":"11813"}],"spuInfo":{"cate4Name":"普通路由器","cate3Name":"路由器","cateName":"普通路由器","enabled":1,"dt":"2020-05-31","gmv":2076572.00,"isNewProduct":1,"itemName":"华为无线wifi6+路由器","price":229.00,"imageUrl":"http://img.alicdn.com/imgextra/i4/3660431536/O1CN01nL76h51NDWxLAWvIO_!!0-item_pic.jpg","id":13301,"skuCnt":1,"cate1Id":"3","cate2Id":"50018264","cate3Id":"124238002","cate4Id":"110808","cate1Name":"手机数码","cate5Id":"-999","brandName":"Huawei/华为","updateTime":"2020-05-29 15:22:24.","url":"http://item.taobao.com/item.htm?id=616046270334","itemId":"616046270334","saleCnt":9068,"cate2Name":"网络设备/网络相关","cate5Name":"-999","isAvailaInJd":0,"cateId":"110808","brandId":"11813","firstGrabTime":"2020-05-04 04:03:48."},"updateTime":"2020-05-29 15:22:24."},
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 商品列表
router.post('/getProductlist', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: {
      records: 101,
      rows: Math.random() > 0.5 ? [
        {
          id: 1000,
          itemId: '2322211121000',
          itemName: '这是一个test',
          url: 'https://www.jd.com/',
          imageUrl: null,
          price: '203.1132',
          brandId: '121',
          brandName: null,
          saleCnt: '343321.23',
          gmv: '7328',
          skuCnt: 4,
          isAvailaInJd: 1,
          isNewProduct: 1,
          firstGrabTime: '2020.05.25',
          property: [{"specName":"颜色","specValue":"藏青色双扣款"}],
          jdSku: '23221111',
          isConcern: 1,
        }
      ] : [
        {
          id: 1,
          itemId: '2322121222',
          itemName: '这是一个test',
          url: 'https://www.jd.com/',
          imageUrl: null,
          price: '203.1132',
          brandId: '121',
          brandName: null,
          saleCnt: '343321.23',
          gmv: '7328',
          skuCnt: 4,
          isAvailaInJd: 1,
          isNewProduct: 1,
          firstGrabTime: '2020.05.25',
          property: [{"specName":"颜色","specValue":"藏青色双扣款"}],
          isConcern: 1,
        },
        {
          id: 10,
          itemId: '23222',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          saleCnt: '34332',
          gmv: '7328',
          skuCnt: 4,
          isAvailaInJd: 1,
          isNewProduct: 1,
          firstGrabTime: '2020.05.25',
          property: [{"specName":"颜色","specValue":"藏青色双扣款"}],
          isConcern: 1,
        },
        {
          id: 11,
          itemId: '2111',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          saleCnt: '34332',
          gmv: '7328',
          skuCnt: 4,
          isAvailaInJd: 0,
          isNewProduct: 1,
          firstGrabTime: '2020.05.25',
          isConcern: 0,
          property: [{"specName":"颜色","specValue":"藏青色双扣款"}]
        },
        {
          id: 13,
          itemId: '21893',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          saleCnt: '34332',
          gmv: '7328',
          skuCnt: 4,
          isAvailaInJd: 1,
          isNewProduct: 0,
          firstGrabTime: '2020.05.25',
          isConcern: 0,
          property: [{"specName":"颜色","specValue":"藏青色双扣款"}]
        }
      ],
      updateTime: '2020-05-25',
    },
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

router.post('/setSpuConcerned', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, 1 ? {
    code: '',
    data: true,
    success: true,
    msg: '',
  }  : {
    code: '4',
    data: false,
    msg: '该末级品类下已关注20个商品！',
    success: false,
  });

  res.send(ret);
});

router.post('/cancelSpuConcerned', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, Math.random() > 0.5 ? {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  } : {
    code: '-1',
    data: null,
    msg: '请求失败',
    success: false,
  });

  res.send(ret);
});

router.post('/saveDiary', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

router.post('/deleteDiary', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 关注商品 list
router.post('/querySpuConcernedList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: Math.random() > 0.5 ? [] : {
      concernedSpuDa: [
        {
          id: 1,
          itemId: '1893',
          itemName: 'hello world，这是一个测试数据',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203.02,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          skuAttr: {
            4361683625904: '[{"keyName":"颜色分类","keyText":"【透明膜带不断带】6支装（共72米）","keyValue":"1627207:80882"}]',
            4361683625903: '[{"keyName":"颜色分类","keyText":"【升级大容量】10支装/共400米(透明膜不断带)","keyValue":"1627207:3232478"}]',
            4361683625902: '[{"keyName":"颜色分类","keyText":"【升级大容量】5支装/共200米(透明膜不断带)","keyValue":"1627207:28341"}]',
            4361683625907: '[{"keyName":"颜色分类","keyText":"【透明膜带不断带】10支装/共300米（量贩装）","keyValue":"1627207:3232479"}]',
            4361683625906: '[{"keyName":"颜色分类","keyText":"【透明膜带不断带】5支装/共150米（量贩装）","keyValue":"1627207:28332"}]'}
        },
        {
          id: 11,
          itemId: '21893',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: '203.22222',
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          skuAttr: {4342690649630: '[{"keyName":"套餐类型","keyText":"标准配置","keyValue":"5919063:3284564"},{"keyName":"颜色分类","keyText":"白色","keyValue":"1627207:28320"}]'}
        },
        {
          id: 13,
          itemId: '2323',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 132: 'sku44',
            // 133: 'sku42',
          // }
        },
        {
          id: 15,
          itemId: '232315',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        },{
          id: 16,
          itemId: '232163',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        },
        {
          id: 17,
          itemId: '232173',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        },
        {
          id: 18,
          itemId: '231823',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        },
        {
          id: 19,
          itemId: '192323',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        },
        {
          id: 20,
          itemId: '202323',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        },{
          id: 21,
          itemId: '232213',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        }, {
          id: 22,
          itemId: '232223',
          itemName: 'Dr.Jart+ 蒂佳婷 进口补水药丸面膜保湿舒缓修护清洁蓝色/绿色2盒装2222',
          url: 'https://www.jd.com/',
          imageUrl: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t1/94310/38/19296/211893/5e9d480aEa6ea76e1/fa1cb69b7928dd5c.png',
          price: 203,
          brandId: '121',
          brandName: '屈臣士',
          firstGrabTime: '2020.05.25',
          dataSource: 3,
          // skuAttr: {
            // 112: 'sku1',
            // 113: 'sku2',
          // }
        }
      ]
    },
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

router.post('/queryDiary', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: [
      {
        id: 1,
        itemId: '1',
        dataSource: 2,
        date: "2020-3-15",
        content: "111这个产品当前趋势不错",
      },
      {
        id: 3,
        itemId: '1',
        dataSource: 2,
        date: "2020-3-25",
        content: "111这个产品后续考虑京东也要卖",
      },
      {
        id: 5,
        itemId: '1',
        dataSource: 2,
        date: "2020-4-29",
        content: "111这个产品要爆款了",
      },
      {
        id: 7,
        itemId: '1',
        dataSource: 2,
        date: "2020-3-15",
        content: "111这个产品当前趋势不错",
      },
      {
        id: 10,
        itemId: '1',
        dataSource: 2,
        date: "2020-3-25",
        content: "111这个产品后续考虑京东也要卖",
      },
      {
        id: 56,
        itemId: '1',
        dataSource: 2,
        date: "2020-4-29",
        content: "111这个产品要爆款了",
      },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

router.post('/queryProductDataByDaily', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: Math.random() > 0.5 ? {"totalSaleCnt":[{"2020-06-10":"34"},{"2020-06-11":"82"},{"2020-06-12":"148"},{"2020-06-13":"252"},{"2020-06-14":"406"},{"2020-06-15":"587"},{"2020-06-16":"792"},{"2020-06-17":"1039"},{"2020-06-21":"1421"},{"2020-06-22":"1815"},{"2020-06-23":"2223"},{"2020-06-24":"2637"},{"2020-06-25":"3062"},{"2020-06-26":"3495"},{"2020-06-27":"3938"}],"updateTime":"2020-06-27","totalGmv":[{"2020-06-10":"1326.00"},{"2020-06-11":"3198.00"},{"2020-06-12":"5831.40"},{"2020-06-13":"9981.00"},{"2020-06-14":"16125.60"},{"2020-06-15":"23347.50"},{"2020-06-16":"31342.50"},{"2020-06-17":"40975.50"},{"2020-06-21":"56217.30"},{"2020-06-22":"76500.01"},{"2020-06-23":"97503.42"},{"2020-06-24":"118815.70"},{"2020-06-25":"140694.25"},{"2020-06-26":"162984.64"},{"2020-06-27":"185789.81"}],"dailySaleCnt":[{"2020-06-10":"34"},{"2020-06-11":"48"},{"2020-06-12":"66"},{"2020-06-13":"104"},{"2020-06-14":"154"},{"2020-06-15":"181"},{"2020-06-16":"205"},{"2020-06-17":"247"},{"2020-06-21":"382"},{"2020-06-22":"394"},{"2020-06-23":"408"},{"2020-06-24":"414"},{"2020-06-25":"425"},{"2020-06-26":"433"},{"2020-06-27":"443"}],"productPrice":[{"2020-06-10":"39.00"},{"2020-06-11":"39.00"},{"2020-06-12":"39.90"},{"2020-06-13":"39.90"},{"2020-06-14":"39.90"},{"2020-06-15":"39.90"},{"2020-06-16":"39.00"},{"2020-06-17":"39.00"},{"2020-06-21":"39.90"},{"2020-06-22":"51.48"},{"2020-06-23":"51.48"},{"2020-06-24":"51.48"},{"2020-06-25":"51.48"},{"2020-06-26":"51.48"},{"2020-06-27":"51.48"}],"dailyGmv":[{"2020-06-10":"1326.00"},{"2020-06-11":"1872.00"},{"2020-06-12":"2633.40"},{"2020-06-13":"4149.60"},{"2020-06-14":"6144.60"},{"2020-06-15":"7221.90"},{"2020-06-16":"7995.00"},{"2020-06-17":"9633.00"},{"2020-06-21":"15241.80"},{"2020-06-22":"20282.71"},{"2020-06-23":"21003.41"},{"2020-06-24":"21312.28"},{"2020-06-25":"21878.55"},{"2020-06-26":"22290.38"},{"2020-06-27":"22805.17"}]} 
    : 
    {"totalSaleCnt":[{"2020-06-10":"4"},{"2020-06-11":"36"},{"2020-06-12":"68"},{"2020-06-13":"99"},{"2020-06-14":"130"},{"2020-06-15":"161"},{"2020-06-21":"488"},{"2020-06-22":"814"},{"2020-06-23":"1139"},{"2020-06-24":"1464"},{"2020-06-25":"1789"},{"2020-06-26":"2114"},{"2020-06-27":"2439"}],"updateTime":"2020-06-27","totalGmv":[{"2020-06-10":"8396.00"},{"2020-06-11":"75564.00"},{"2020-06-12":"142732.00"},{"2020-06-13":"207801.00"},{"2020-06-14":"272870.00"},{"2020-06-15":"337939.00"},{"2020-06-21":"1111171.38"},{"2020-06-22":"1854404.80"},{"2020-06-23":"2622907.93"},{"2020-06-24":"3391411.05"},{"2020-06-25":"4159914.18"},{"2020-06-26":"4928417.30"},{"2020-06-27":"5696920.43"}],"dailySaleCnt":[{"2020-06-10":"4"},{"2020-06-11":"32"},{"2020-06-12":"32"},{"2020-06-13":"31"},{"2020-06-14":"31"},{"2020-06-15":"31"},{"2020-06-21":"327"},{"2020-06-22":"326"},{"2020-06-23":"325"},{"2020-06-24":"325"},{"2020-06-25":"325"},{"2020-06-26":"325"},{"2020-06-27":"325"}],"productPrice":[{"2020-06-10":"2099.00"},{"2020-06-11":"2099.00"},{"2020-06-12":"2099.00"},{"2020-06-13":"2099.00"},{"2020-06-14":"2099.00"},{"2020-06-15":"2099.00"},{"2020-06-21":"2364.63"},{"2020-06-22":"2279.86"},{"2020-06-23":"2364.63"},{"2020-06-24":"2364.63"},{"2020-06-25":"2364.63"},{"2020-06-26":"2364.63"},{"2020-06-27":"2364.63"}],"dailyGmv":[{"2020-06-10":"8396.00"},{"2020-06-11":"67168.00"},{"2020-06-12":"67168.00"},{"2020-06-13":"65069.00"},{"2020-06-14":"65069.00"},{"2020-06-15":"65069.00"},{"2020-06-21":"773232.38"},{"2020-06-22":"743233.43"},{"2020-06-23":"768503.13"},{"2020-06-24":"768503.13"},{"2020-06-25":"768503.13"},{"2020-06-26":"768503.13"},{"2020-06-27":"768503.13"}]},
    // {
    //   productPrice: [
    //     // [0, 5], [12, 25], [24, 20], [36, 36], [48, 10], [60, 15], [72, 30]
    //   ],
    //   dailySaleCnt: [
    //     {'2020-06-01': 10}, {'2020-06-02': 25}, {'2020-06-03': 20}, {'2020-06-04': 36}, {'2020-06-05': 10}, {'2020-06-06': 15}, {'2020-06-07': 38}
    //   ],
    //   dailyGmv: [
    //     {'2020-06-01': 15}, {'2020-06-02': 25}, {'2020-06-03': 20}, {'2020-06-04': 36}, {'2020-06-05': 10}, {'2020-06-06': 15}, {'2020-06-07': 38}
    //   ],
    //   totalSaleCnt: [
    //     // [0, 20], [12, 25], [24, 20], [36, 36], [48, 10], [60, 15], [72, 30]
    //   ],
    //   totalGmv: [
    //     // [0, 25], [12, 25], [24, 20], [36, 36], [48, 10], [60, 15], [72, 30]
    //   ],
    // }
    // ,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 商品列表、详情页导出
router.post('/exportSpu', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 关注商品页导出
router.post('/exportConcernedSpu', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

module.exports = router;
