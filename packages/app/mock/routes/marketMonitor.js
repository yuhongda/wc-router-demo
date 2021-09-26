const express = require('express');
const _ = require('lodash');
const router = express.Router();

// 添加自定义市场
router.post('/addCustomizeMarket', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, 0 ? {
    code: '0',
    data: false,
    msg: '失败了哈',
    success: false,
  } : {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 删除自定义市场
router.post('/delCustomizeMarket', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, Math.random() > 0.5 ? {
    code: '0',
    data: true,
    msg: '成功',
    success: true,
  } : {
    code: '4',
    data: false,
    msg: '失败',
    success: false,
  });

  res.send(ret);
});

// 获取TOP200市场列表
router.post('/getMarketTrendList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: {
      records: 101,
      rows: [
        {
          id: 1,
          marketName: '这是一个test',
          potentialIndex: '232222',
          scaleIndex: '203',
          brandFocus: null,
          spuFocus: '34332',
          increaseIndex: '7328',
          operate: 0,
        },
        {
          id: 2,
          marketName: '这是一个test',
          potentialIndex: '11232222',
          scaleIndex: '11203',
          brandFocus: '11121',
          spuFocus: '1134332',
          increaseIndex: '117328',
          operate: 1,
        },
        {
          id: 3,
          marketName: '这是一个test',
          potentialIndex: '232222',
          scaleIndex: '22203',
          brandFocus: '22121',
          spuFocus: '3224332',
          increaseIndex: '227328',
          operate: 1,
        },
        {
          id: 4,
          marketName: '这是一个test',
          potentialIndex: '23332222',
          scaleIndex: '23303',
          brandFocus: '13321',
          spuFocus: '3334332',
          increaseIndex: '337328',
          operate: 1,
        },
      ],
    },
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 获取自定义市场列表
router.post('/getCustomizeMarketTrendList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: {
      records: 101,
      rows: [
        {
          id: 1,
          dt: null,
          marketName: '自定义市场test',
          potentialIndex: '232222',
          scaleIndex: '203',
          brandFocus: '121',
          spuFocus: '34332',
          increaseIndex: '7328',
          operate: 0,
        },
        {
          id: 2,
          dt: '2020-05',
          marketName: '自定义市场test',
          potentialIndex: '11232222',
          scaleIndex: '11203',
          brandFocus: '11121',
          spuFocus: '1134332',
          increaseIndex: '117328',
          operate: 1,
        },
        {
          id: 3,
          dt: '2020-08',
          marketName: '自定义市场test',
          potentialIndex: '232222',
          scaleIndex: '22203',
          brandFocus: '22121',
          spuFocus: '3224332',
          increaseIndex: '227328',
          operate: 1,
        },
        {
          id: 4,
          marketName: '自定义市场test',
          potentialIndex: '23332222',
          scaleIndex: '23303',
          brandFocus: '13321',
          spuFocus: '3334332',
          increaseIndex: '337328',
          operate: 1,
        },
      ],
    },
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 获取自定义市场详情
router.post('/getCustimzeMarketInfo', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: [
      {
        "keywords": "花香",
        "relateType": 0,
        "type": 0,
        "name": "花香类洗衣液",
        "rank": 0
      },
      {
        "keywords": "洗衣液",
        "relateType": 0,
        "type": 0,
        "name": "花香类洗衣液",
        "rank": 1
      },
      {
        "keywords": "花",
        "relateType": 1,
        "type": 0,
        "name": "花香类洗衣液",
        "rank": 2
      },
      {
        "keywords": "香",
        "relateType": 0,
        "type": 0,
        "name": "花香类洗衣液",
        "rank": 3
      },
      {
        "keywords": "洗衣凝珠",
        "relateType": 0,
        "type": 1,
        "name": "花香类洗衣液",
        "rank": 4
      }
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 设置关注市场
router.post('/setAttentionMarket', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, Math.random() > 0.5 ? {
    code: '0',
    data: true,
    msg: '',
    success: true,
  } : {
    code: '4',
    data: null,
    msg: '此品类下已关注市场已达上限',
    success: false,
  });

  res.send(ret);
});

// 删除关注市场
router.post('/delAttentionMarket', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, Math.random() > 0.5 ? {
    code: '0',
    data: true,
    msg: '',
    success: true,
  } : {
    code: '4',
    data: null,
    msg: '删除关注市场失败',
    success: false,
  });

  res.send(ret);
});

router.post('/getJdAttentionList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: Math.random() > 0.7 ? [] : [
      {
        id: 1,
        name: '甜辣鸭脖'
      },
      {
        id: 13,
        name: '变态辣'
      },
      {
        id: 14,
        name: '周黑鸭'
      },
      {
        id: 15,
        name: '绝味'
      },
      {
        id: 16,
        name: '久久鸭'
      },
      {
        id: 17,
        name: '华为'
      },
      {
        id: 18,
        name: '小米'
      },
      {
        id: 111,
        name: '甜辣鸭脖'
      },
      {
        id: 1113,
        name: '变态辣'
      },
      {
        id: 1114,
        name: '周黑鸭'
      },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 获取指数变化趋势数据
router.post('/getAttentionMarketList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: [
      {
        id: 1,
        marketName: '自定义市场test',
        potentialIndex: '188.9803',
        scaleIndex: '203.213387',
        brandFocus: '101',
        spuFocus: '343',
        increaseIndex: '228',
        dt: '2019-12',
      },
      {
        id: 2,
        marketName: '自定义市场test',
        potentialIndex: null,
        scaleIndex: '303',
        brandFocus: '121',
        spuFocus: '332',
        increaseIndex: '428',
        dt: '2020-02',
      },
      {
        id: 3,
        marketName: '自定义市场test',
        potentialIndex: '332',
        scaleIndex: '403',
        brandFocus: '221',
        spuFocus: '432',
        increaseIndex: '398',
        dt: '2020-03',
      },
      {
        id: 4,
        marketName: '自定义市场test',
        potentialIndex: '490',
        scaleIndex: '503',
        brandFocus: '121',
        spuFocus: '332',
        increaseIndex: '328',
        dt: '2020-04',
      },
      {
        id: 5,
        marketName: '自定义市场test',
        potentialIndex: '590',
        scaleIndex: '603',
        brandFocus: '321',
        spuFocus: '432',
        increaseIndex: '428',
        dt: '2020-05',
      },
      {
        id: 6,
        marketName: '自定义市场test',
        potentialIndex: '690',
        scaleIndex: '703',
        brandFocus: '421',
        spuFocus: '532',
        increaseIndex: '528',
        dt: '2020-06',
      },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 获取市场关键词
router.post('/getKeyWordsList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: 1 ? [
      {"id":1419,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"滚筒洗衣机全自动","frequency":108,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1420,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"10公斤","frequency":72,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1421,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"滚筒洗衣机","frequency":58,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1422,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"LG","frequency":55,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1423,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"洗烘一体","frequency":53,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1424,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"智能家电","frequency":36,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1425,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"线下同款","frequency":36,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1426,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"美的（Midea）滚筒洗衣机全自动","frequency":36,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1427,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"美的","frequency":35,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1428,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"变频滚筒洗衣机","frequency":35,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1429,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"8公斤","frequency":35,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1430,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"中途添衣","frequency":33,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1431,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"10公斤变频","frequency":31,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1432,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"空气洗","frequency":30,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1433,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"变频","frequency":30,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1434,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"洗烘一体机","frequency":29,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1435,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"TCL","frequency":28,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1436,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"西门子(SIEMENS)","frequency":28,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1437,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"海信(Hisense)","frequency":27,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1438,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"9公斤","frequency":26,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1439,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"小天鹅","frequency":25,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1440,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"海尔（Haier）滚筒洗衣机全自动","frequency":25,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1441,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"海尔","frequency":24,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1442,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"静音","frequency":24,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1443,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"AEG","frequency":23,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1444,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"高温除菌","frequency":23,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1445,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"Haier","frequency":23,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1446,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"10公斤大容量","frequency":22,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1447,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"除菌","frequency":21,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1448,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"祛味空气洗","frequency":21,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1449,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"直驱变频","frequency":20,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1450,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"卡萨帝","frequency":20,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1451,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"博世（BOSCH）","frequency":19,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1452,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"全自动滚筒洗衣机","frequency":19,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1453,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"羽绒服洗","frequency":19,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1454,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"10公斤洗烘一体","frequency":18,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1455,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"全自动","frequency":17,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1456,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"Midea","frequency":17,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1457,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"羊毛洗","frequency":16,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1458,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"统帅（Leader）","frequency":16,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1459,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"海尔出品","frequency":16,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1460,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"（Casarte）","frequency":16,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1461,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"云米","frequency":15,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1462,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"节能静音","frequency":15,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1463,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"婴幼洗","frequency":14,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1464,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"8公斤变频","frequency":14,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1465,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"全自动变频滚筒洗衣机","frequency":14,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1466,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"巴氏除菌洗","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1467,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"BLDC变频电机","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1468,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"C1","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1469,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"超薄","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1470,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"一级能效","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1471,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"容声(Ronshen)","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1472,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"比佛利","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1473,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"大容量","frequency":13,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1474,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"C","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1475,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"智能APP控制","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1476,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"婴儿洗","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1477,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"高温筒清洁","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1478,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"高温筒自洁","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1479,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"洗烘套装","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1480,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"洗烘一体变频","frequency":12,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1481,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"东芝DD直驱","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1482,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"物理去渍更健康","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1483,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"水魔方护色护形","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1484,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"智能烘干","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1485,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"自动添加","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1486,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"LittleSwan","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1487,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"BLDC静音变频","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1488,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"比佛利（BEVERLY）小天鹅出品","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1489,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"（Midea）滚筒洗衣机全自动","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1490,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"容声","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1491,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"真丝柔洗","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1492,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"TFT彩屏","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1493,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"企业购","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1494,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"BLDC变频","frequency":11,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1495,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"智能投放","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1496,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"统帅","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1497,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"高温洗涤","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1498,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"蒸汽除菌","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1499,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"Leader","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1500,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"小天鹅（LittleSwan）10公斤变频","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1501,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"C8","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1502,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"带烘干","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1503,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"防过敏程序","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1504,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"惠而浦(Whirlpool)","frequency":10,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1505,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"速净喷淋","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1506,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"海尔（Haier)","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1507,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"吉德（JIDE）10公斤全自动滚筒婴儿脱水洗衣机","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1508,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"光动银除菌","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1509,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"变频全自动滚筒洗衣机","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1510,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"洗烘一体变频滚筒洗衣机","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1511,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"高温洗","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1512,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"松下(Panasonic)滚筒洗衣机全自动10公斤","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1513,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"夏普(SHARP)","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1514,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"德国进口","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1515,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"暖衣","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1516,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"VIOMI","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1517,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"静音节能","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"},
      {"id":1518,"cate1Id":"737","cate1Name":"家用电器","cate2Id":"794","cate2Name":"大 家 电","cate3Id":"880","cate3Name":"洗衣机","cate4Id":"-999","cate4Name":"-999","cate5Id":"-999","cate5Name":"-999","cateId":"880","cateName":"洗衣机","marketName":"yc洗衣机2","keywords":"免熨烫","frequency":9,"dataType":2,"erp":"yangchao140","dt":"2020-05"}
    ] : [
      {
        marketName: '自定义市场test',
        keywords: '休闲鞋',
        frequency: 100,
      },
      {
        marketName: '自定义市场test',
        keywords: '帆布鞋',
        frequency: 50,
      },
      {
        marketName: '自定义市场test',
        keywords: '拉力器',
        frequency: 1000,
      },
      {
        marketName: '自定义市场test',
        keywords: '望远镜',
        frequency: 23000,
      },
      {
        marketName: '自定义市场test',
        keywords: '永修仪表',
        frequency: 80,
      },
      {
        marketName: '自定义市场test',
        keywords: '滑雪装备',
        frequency: 580,
      },
      {
        marketName: '自定义市场test',
        keywords: '钓鱼配件',
        frequency: 30832,
      },
      {
        marketName: '自定义市场test',
        keywords: '游泳防水包',
        frequency: 3943,
      },
      {
        marketName: '自定义市场test',
        keywords: '羽毛球',
        frequency: 34,
      },
      {
        marketName: '自定义市场test',
        keywords: '便携小包装4层12包/1条',
        frequency: 2,
      },
      {
        marketName: '自定义市场test',
        keywords: '喝水',
        frequency: 2332,
      },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 获取相关商品列表
router.post('/getMarketSpuList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: Math.random() > 0.5 ? [{"skuId":"782232","skuName":"小天鹅滚筒洗衣机全自动","sales":36,"gmv":5.232},{"skuId":"232221","skuName":"西门子(SIEMENS) 变频滚筒洗衣机 ","sales":23,"gmv":2.233},] : [{"skuId":"4098931","skuName":"小天鹅（LittleSwan）10公斤变频 滚筒洗衣机全自动 手机智能控制 BLDC变频电机 T","sales":20736,"gmv":5.785248901E7},{"skuId":"4750381","skuName":"西门子(SIEMENS) 10公斤 变频滚筒洗衣机 防过敏程序 高温筒清洁 快洗15' 羽绒服专业洗","sales":5937,"gmv":2.122992656E7},{"skuId":"100005198128","skuName":"海尔（Haier）10公斤全自动波轮洗衣机大容量玻璃上盖智能模糊控制全新升级海立方内桶EB100Z0","sales":11587,"gmv":1.764464885E7},{"skuId":"100004652001","skuName":"美的（Midea）滚筒洗衣机全自动 10公斤 食用级巴氏除菌洗 10KG大容量 静音变频MG100","sales":9676,"gmv":1.657988839E7},{"skuId":"7243108","skuName":"小天鹅（LittleSwan）10公斤变频 滚筒洗衣机全自动 TG100V62ADS5 纳米银离子高","sales":5420,"gmv":1.490555135E7},{"skuId":"100007255984","skuName":"美的 （Midea）滚筒洗衣机全自动 10公斤洗烘一体 祛味空气洗 智能烘干 BLDC静音变频 MD","sales":6625,"gmv":1.428321839E7},{"skuId":"7575026","skuName":"小天鹅(LittleSwan)10公斤变频 滚筒洗衣机全自动 水魔方护色护形 智能家电 小京鱼APP","sales":3596,"gmv":1.389993721E7},{"skuId":"100004688993","skuName":"小天鹅（LittleSwan）10公斤变频 滚筒洗衣机全自动 TG100PURE 智能家电 特色高温","sales":6279,"gmv":1.292079322E7},{"skuId":"100004772330","skuName":"西门子(SIEMENS) 10公斤 变频滚筒洗衣机 降噪节能 快洗15' 筒清洁（白色） XQG10","sales":1979,"gmv":1.060415354E7},{"skuId":"7092112","skuName":"海尔（Haier）10公斤大容量半自动双缸洗衣机 洗大件更轻松 瀑布水流高效洁净 XPB100-19","sales":12955,"gmv":1.051380068E7},{"skuId":"100001949251","skuName":"美的（Midea）滚筒洗衣机全自动 10公斤大容量 巴氏除菌洗 BLDC静音变频 MG100S31","sales":4709,"gmv":9022832.65},{"skuId":"100004334331","skuName":"西门子(SIEMENS) 10公斤 变频洗烘一体机 7kg烘干 大洗大烘 智控烘干 智能除渍 热风清","sales":2015,"gmv":8686800.88},{"skuId":"100012411658","skuName":"小天鹅（LittleSwan）10公斤 波轮洗衣机全自动 健康免清洗 一键脱水 品质电机 TB100","sales":6013,"gmv":8198236.46},{"skuId":"100004188443","skuName":"统帅（Leader） 海尔出品 10公斤变频 滚筒洗衣机全自动 高温除菌 筒自洁快乐小鸡系列 @G1","sales":5405,"gmv":8001656.76},{"skuId":"100000251609","skuName":"小天鹅(LittleSwan)10公斤变频 滚筒洗衣机全自动 智能家电 纳米银离子除菌 全触摸屏 T","sales":2762,"gmv":7712316.91},{"skuId":"100000249075","skuName":"美的（Midea）滚筒洗衣机全自动 10公斤变频洗烘一体 祛味空气洗 巴氏除菌洗 MD100V31D","sales":3243,"gmv":7708037.99},{"skuId":"100005633422","skuName":"统帅（Leader） 海尔出品 10公斤洗烘一体滚筒洗衣机全自动除螨除菌空气洗快乐小鸡 @G1012","sales":4004,"gmv":7683550.6},{"skuId":"7243096","skuName":"小天鹅(LittleSwan)10公斤洗烘一体滚筒洗衣机全自动 TD100V62WADS5 纳米银离","sales":2436,"gmv":7241586.9},{"skuId":"100003335137","skuName":"海尔（Haier） 滚筒洗衣机全自动除菌除螨洗烘一体 直驱变频摇篮柔洗 10公斤 EG10014HB","sales":1632,"gmv":7069541.8},{"skuId":"8316196","skuName":"小天鹅（LittleSwan）10公斤洗烘一体 滚筒洗衣机全自动 水魔方护色护形 智能控制 蒸汽烘干","sales":1619,"gmv":7052136.6}],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 获取用户特征
router.post('/getUserPortraiteList', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: 1 ? [{"dname":"性别","list":[{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"性别","dvalue":"男性","portraitRate":0.8256,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"性别","dvalue":"女性","portraitRate":0.1708,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"性别","dvalue":"家庭用户\r\n","portraitRate":0.0035,"marketPortraitRate":null}]},{"dname":"用户身份","list":[{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"用户身份","dvalue":"非plus会员","portraitRate":0.6276,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"用户身份","dvalue":"plus会员","portraitRate":0.3724,"marketPortraitRate":null}]},{"dname":"城市级别","list":[{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"城市级别","dvalue":"一线城市","portraitRate":0.3126,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"城市级别","dvalue":"二线城市","portraitRate":2.0000,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"城市级别","dvalue":"三线城市","portraitRate":0.1486,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"城市级别","dvalue":"四线城市","portraitRate":0.1049,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"城市级别","dvalue":"五线城市","portraitRate":0.0095,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"城市级别","dvalue":"其他","portraitRate":0.0537,"marketPortraitRate":null}]},{"dname":"职业","list":[{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"其他\r\n","portraitRate":0.2590,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"白领/一般职员","portraitRate":0.2199,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"农民\r\n","portraitRate":0.1477,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"教师\r\n","portraitRate":0.1431,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"学生","portraitRate":0.0916,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"工人/服务业人员\r\n","portraitRate":0.0663,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"公务员/事业单位\r\n","portraitRate":0.0436,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"金融从业者\r\n","portraitRate":0.0156,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"职业","dvalue":"医务人员","portraitRate":0.0133,"marketPortraitRate":null}]},{"dname":"学历","list":[{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"学历","dvalue":"大学(专科及本科)\r\n","portraitRate":0.6648,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"学历","dvalue":"高中(中专)\r\n","portraitRate":0.1552,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"学历","dvalue":"研究生(硕士及以上)\r\n","portraitRate":0.1299,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"学历","dvalue":"其他","portraitRate":0.0406,"marketPortraitRate":null},{"cate1Id":"670","cate1Name":null,"cate2Id":"671","cate2Name":null,"cate3Id":"12798","cate3Name":"一体机","cate4Id":"-999","cate4Name":null,"cate5Id":null,"cate5Name":null,"dname":"学历","dvalue":"初中及以下","portraitRate":0.0094,"marketPortraitRate":null}]}] : [
      {
        dname: '城市级别',
        list: [
          {
            dvalue: '一线城市',
            portraitRate: 0.8256,
            marketPortraitRate: null,
          },
          {
            dvalue: '二线城市',
            portraitRate: '70',
            marketPortraitRate: null,
          },
          {
            dvalue: '三线城市',
            portraitRate: '30',
            marketPortraitRate: '20',
          },
          {
            dvalue: '四线城市',
            portraitRate: '80',
            marketPortraitRate: '50',
          },
          {
            dvalue: '五线城市',
            portraitRate: '20',
            marketPortraitRate: '60',
          },
        ],
      },
      {
        dname: '促销敏感',
        list: [
          {
            dvalue: '一线城市',
            portraitRate: '65',
            marketPortraitRate: '15',
          },
          {
            dvalue: '二线城市',
            portraitRate: '70',
            marketPortraitRate: '15',
          },
          {
            dvalue: '三线城市',
            portraitRate: '30',
            marketPortraitRate: '20',
          },
          {
            dvalue: '四线城市',
            portraitRate: '80',
            marketPortraitRate: '50',
          },
          {
            dvalue: '五线城市',
            portraitRate: '20',
            marketPortraitRate: '60',
          },
        ],
      },
      {
        dname: '促销敏感',
        list: [
          {
            dvalue: '一线城市',
            portraitRate: '85',
            marketPortraitRate: '25',
          },
          {
            dvalue: '二线城市',
            portraitRate: '70',
            marketPortraitRate: '15',
          },
          {
            dvalue: '三线城市',
            portraitRate: '30',
            marketPortraitRate: '20',
          },
          {
            dvalue: '四线城市',
            portraitRate: '80',
            marketPortraitRate: '50',
          },
          {
            dvalue: '五线城市',
            portraitRate: '20',
            marketPortraitRate: '60',
          },
        ],
      },
      {
        dname: '城市级别',
        list: [
          {
            dvalue: '一线城市',
            portraitRate: '65',
            marketPortraitRate: '15',
          },
          {
            dvalue: '二线城市',
            portraitRate: '70',
            marketPortraitRate: '15',
          },
          {
            dvalue: '三线城市',
            portraitRate: '30',
            marketPortraitRate: '20',
          },
          {
            dvalue: '四线城市',
            portraitRate: '80',
            marketPortraitRate: '50',
          },
          {
            dvalue: '五线城市',
            portraitRate: '20',
            marketPortraitRate: '60',
          },
        ],
      },
      {
        dname: '城市级别',
        list: [
          {
            dvalue: '一线城市',
            portraitRate: '85',
            marketPortraitRate: '25',
          },
          {
            dvalue: '二线城市',
            portraitRate: '70',
            marketPortraitRate: '15',
          },
          {
            dvalue: '三线城市',
            portraitRate: '30',
            marketPortraitRate: '20',
          },
          {
            dvalue: '四线城市',
            portraitRate: '80',
            marketPortraitRate: '50',
          },
          {
            dvalue: '五线城市',
            portraitRate: '20',
            marketPortraitRate: '60',
          },
        ],
      },
      // {
      //   dname: '促销敏感',
      //   list: [
      //     {
      //       dvalue: '一线城市',
      //       portraitRate: '65',
      //       marketPortraitRate: '15',
      //     },
      //     {
      //       dvalue: '二线城市',
      //       portraitRate: '70',
      //       marketPortraitRate: '15',
      //     },
      //     {
      //       dvalue: '三线城市',
      //       portraitRate: '30',
      //       marketPortraitRate: '20',
      //     },
      //     {
      //       dvalue: '四线城市',
      //       portraitRate: '80',
      //       marketPortraitRate: '50',
      //     },
      //     {
      //       dvalue: '五线城市',
      //       portraitRate: '20',
      //       marketPortraitRate: '60',
      //     },
      //   ],
      // },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

module.exports = router;
