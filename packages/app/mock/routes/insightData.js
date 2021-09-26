const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.post('/calculationPossible', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, { code: '0', msg: '请求成功', data: true, success: true });

  res.send(ret);
});

router.post('/updateReport', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, { code: '0', msg: '请求成功', data: null, success: true });

  res.send(ret);
});

router.post('/getCurrentDt', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, { code: '0', msg: '请求成功', data: '2020-10', success: true });

  res.send(ret);
});

router.post('/uploadBasicData', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, { code: '0', msg: '请求成功', data: null, success: true });

  res.send(ret);
}); 

router.post('/getVersions', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: [
      { versionName: '默认版本', versionId: '-1' },
      { versionName: 'suhang22-655-20201028210150', versionId: 'suhang22-655-20201028210150' },
      { versionName: 'suhang22-655-20201028210353', versionId: 'suhang22-655-20201028210353' },
      { versionName: 'suhang22-655-20201030152138', versionId: 'suhang22-655-20201030152138' },
      { versionName: 'suhang22-655-20201102201253', versionId: 'suhang22-655-20201102201253' },
      { versionName: 'chenrui142-655-20201201171057', versionId: 'chenrui142-655-20201201171057' },
    ],
    success: true,
  });

  res.send(ret);
});

router.post('/getInsightKeywordList', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [
        {
          id: 2200727,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品类别',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '手机',
          keyWord: '手机',
          keyWordCnt: 850957499,
          sentence: '手机',
          sentenceCnt: 361211649,
          status: 0,
          dt: '2020-10-31',
          index: 0,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200728,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '华为',
          keyWord: '华为',
          keyWordCnt: 608809886,
          sentence: '华为',
          sentenceCnt: 119604383,
          status: 0,
          dt: '2020-10-31',
          index: 1,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200729,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: 'E',
          keyWord: 'E',
          keyWordCnt: 430266082,
          sentence: 'IPHONE',
          sentenceCnt: 50581879,
          status: 0,
          dt: '2020-10-31',
          index: 2,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200730,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '苹果',
          keyWord: '苹果',
          keyWordCnt: 247943382,
          sentence: '苹果11',
          sentenceCnt: 62674167,
          status: 0,
          dt: '2020-10-31',
          index: 3,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 1942845,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '应用行为',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '小米111',
          keyWord: '小米',
          keyWordCnt: 192466773,
          sentence: '小米手机小米手机小米手机小米手机小米手机小米手机小米手机',
          sentenceCnt: 38727609,
          status: 3,
          dt: '2020-09-30',
          index: 4,
          statusName: '已修改',
          dataSourceName: null,
        },
        {
          id: 2200732,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: 'IPHONE',
          keyWord: 'IPHONE',
          keyWordCnt: 172534386,
          sentence: 'IPHONE',
          sentenceCnt: 50581879,
          status: 0,
          dt: '2020-10-31',
          index: 5,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200733,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '荣耀',
          keyWord: '荣耀',
          keyWordCnt: 165214660,
          sentence: '荣耀',
          sentenceCnt: 15513378,
          status: 0,
          dt: '2020-10-31',
          index: 6,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200734,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品属性',
          aspect2: '产品名称',
          aspect3: '',
          stdKeyWord: '华为手机',
          keyWord: '华为手机',
          keyWordCnt: 136260271,
          sentence: '华为手机',
          sentenceCnt: 84580764,
          status: 0,
          dt: '2020-10-31',
          index: 7,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200735,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '商品属性',
          aspect2: 'zmsz',
          aspect3: '',
          stdKeyWord: '11',
          keyWord: '11',
          keyWordCnt: 129278506,
          sentence: '苹果11',
          sentenceCnt: 62674167,
          status: 0,
          dt: '2020-10-31',
          index: 8,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          id: 2200736,
          itemFirstCateCd: null,
          itemFirstCateName: null,
          itemSecondCateCd: null,
          itemSecondCateName: null,
          itemThirdCateCd: null,
          itemThirdCateName: null,
          itemFourthCateCd: null,
          itemFourthCateName: null,
          aspect1: '渠道',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '自营',
          keyWord: '自营',
          keyWordCnt: 125266728,
          sentence: '手机自营',
          sentenceCnt: 34789689,
          status: 0,
          dt: '2020-10-31',
          index: 9,
          statusName: '未修改',
          dataSourceName: null,
        },
      ],
      records: 677759,
      pageNum: 1,
      pageSize: 10,
      totalPage: 67776,
    },
    success: true,
  });

  res.send(ret);
});

router.post('/getTopOriginalSentences', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};
  const data =
    params.dataSource === '3'
      ? [
          {
            title:
              '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            sourceType: 6,
            link: '链接',
          },
          {
            title: '标题',
            sourceType: 6,
            link: '链接',
          },
          {
            title:
              '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            sourceType: 2,
            link: '链接',
          },
          {
            title: '标题',
            sourceType: 2,
            link: '链接',
          },
          {
            title:
              '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            sourceType: 1,
            link: '链接',
          },
          {
            title: '标题',
            sourceType: 1,
            link: '链接',
          },
        ]
      : ['华为', '华为手机', '手机华为', '华为MATE30', '华为P40'];

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data,
    success: true,
  });

  res.send(ret);
});

router.post('/getBlackList', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [
        {
          id: 11930,
          itemFirstCateCd: '670',
          itemFirstCateName: '电脑、办公',
          itemSecondCateCd: '677',
          itemSecondCateName: '电脑组件',
          itemThirdCateCd: '688',
          itemThirdCateName: '显示器',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品类别',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '显示器',
          keyWord: '显示器',
          keyWordCnt: 88051284,
          sentence: '显示器',
          sentenceCnt: 33163881,
          status: 2,
          dt: '2020-10-31',
          index: 0,
          statusName: '删除',
          dataSourceName: null,
        },
        {
          id: 11929,
          itemFirstCateCd: '670',
          itemFirstCateName: '电脑、办公',
          itemSecondCateCd: '677',
          itemSecondCateName: '电脑组件',
          itemThirdCateCd: '688',
          itemThirdCateName: '显示器',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品类别',
          aspect2: '',
          aspect3: '',
          stdKeyWord: '电脑',
          keyWord: '电脑',
          keyWordCnt: 8885266,
          sentence: '电脑显示器',
          sentenceCnt: 3896874,
          status: 2,
          dt: '2020-10-31',
          index: 1,
          statusName: '删除',
          dataSourceName: null,
        },
        {
          id: 11931,
          itemFirstCateCd: '670',
          itemFirstCateName: '电脑、办公',
          itemSecondCateCd: '677',
          itemSecondCateName: '电脑组件',
          itemThirdCateCd: '688',
          itemThirdCateName: '显示器',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: '刷新率',
          aspect3: '',
          stdKeyWord: '144HZ',
          keyWord: '144HZ',
          keyWordCnt: 7445400,
          sentence: '144HZ显示器',
          sentenceCnt: 1692410,
          status: 2,
          dt: '2020-10-31',
          index: 2,
          statusName: '删除',
          dataSourceName: null,
        },
        {
          id: 11932,
          itemFirstCateCd: '670',
          itemFirstCateName: '电脑、办公',
          itemSecondCateCd: '677',
          itemSecondCateName: '电脑组件',
          itemThirdCateCd: '688',
          itemThirdCateName: '显示器',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: '其他属性',
          aspect3: '',
          stdKeyWord: '显示屏',
          keyWord: '显示屏',
          keyWordCnt: 7059145,
          sentence: '显示屏',
          sentenceCnt: 2561501,
          status: 2,
          dt: '2020-10-31',
          index: 3,
          statusName: '删除',
          dataSourceName: null,
        },
        {
          id: 11926,
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: 'VIVO',
          keyWord: 'VIVO',
          keyWordCnt: 122410414,
          sentence: 'VIVO手机',
          sentenceCnt: 24961038,
          status: 2,
          dt: '2020-10-31',
          index: 0,
          statusName: '删除',
          dataSourceName: null,
        },
        {
          id: 11927,
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: 'AT',
          keyWord: 'AT',
          keyWordCnt: 111439769,
          sentence: '华为MATE30',
          sentenceCnt: 31038750,
          status: 2,
          dt: '2020-10-31',
          index: 1,
          statusName: '删除',
          dataSourceName: null,
        },
        {
          id: 11928,
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品品牌',
          aspect2: '',
          aspect3: '',
          stdKeyWord: 'OPPO',
          keyWord: 'OPPO',
          keyWordCnt: 101954113,
          sentence: 'OPPO手机',
          sentenceCnt: 20943708,
          status: 2,
          dt: '2020-10-31',
          index: 2,
          statusName: '删除',
          dataSourceName: null,
        },
      ],
      records: 677759,
      pageNum: 1,
      pageSize: 10,
      totalPage: 67776,
    },
    success: true,
  });

  res.send(ret);
});

router.post('/getUserAspectList', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品类别',
          aspect2: '',
          aspect3: '',
          oldAspect1: '商品类别',
          oldAspect2: '',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 937438660,
          status: 0,
          dt: null,
          index: 0,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: 'zmsz',
          aspect3: '',
          oldAspect1: '商品属性',
          oldAspect2: 'zmsz',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 790726242,
          status: 0,
          dt: null,
          index: 1,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '新词',
          aspect2: '',
          aspect3: '',
          oldAspect1: '新词',
          oldAspect2: '',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 423672274,
          status: 0,
          dt: null,
          index: 2,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: '产品名称',
          aspect3: '',
          oldAspect1: '商品属性',
          oldAspect2: '产品名称',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 358871950,
          status: 0,
          dt: null,
          index: 3,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: '其他属性',
          aspect3: '',
          oldAspect1: '商品属性',
          oldAspect2: '其他属性',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 196858473,
          status: 0,
          dt: null,
          index: 4,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '渠道',
          aspect2: '',
          aspect3: '',
          oldAspect1: '渠道',
          oldAspect2: '',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 128968567,
          status: 0,
          dt: null,
          index: 5,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: '热点',
          aspect3: '',
          oldAspect1: '商品属性',
          oldAspect2: '热点',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 112638704,
          status: 0,
          dt: null,
          index: 6,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品外观',
          aspect2: '',
          aspect3: '',
          oldAspect1: '商品外观',
          oldAspect2: '',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 31554751,
          status: 0,
          dt: null,
          index: 7,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '商品属性',
          aspect2: 'CPU型号',
          aspect3: '',
          oldAspect1: '商品属性',
          oldAspect2: 'CPU型号',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 14029598,
          status: 0,
          dt: null,
          index: 8,
          statusName: '未修改',
          dataSourceName: null,
        },
        {
          itemFirstCateCd: '9987',
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: '653',
          itemSecondCateName: '手机',
          itemThirdCateCd: '655',
          itemThirdCateName: '手机',
          itemFourthCateCd: '-999',
          itemFourthCateName: '-999',
          aspect1: '适用人群',
          aspect2: '',
          aspect3: '',
          oldAspect1: '适用人群',
          oldAspect2: '',
          oldAspect3: '',
          keyWord: '0X9A1B8C2D',
          keyWordCnt: 11557478,
          status: 0,
          dt: null,
          index: 9,
          statusName: '未修改',
          dataSourceName: null,
        },
      ],
      records: 677759,
      pageNum: 1,
      pageSize: 10,
      totalPage: 67776,
    },
    success: true,
  });

  res.send(ret);
});

router.post('/getWhiteList', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [],
      records: 0,
      pageNum: 1,
      pageSize: 10,
      totalPage: 1,
    },
    success: true,
  });

  res.send(ret);
});

router.post('/getAllAspects', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: [
      { value: '适用人群', label: '适用人群', ifAuth: true, children: [] },
      {
        value: '商品属性',
        label: '商品属性',
        ifAuth: true,
        children: [
          { value: '后置摄像头', label: '后置摄像头', ifAuth: true, children: [] },
          { value: '运行内存', label: '运行内存', ifAuth: true, children: [] },
          { value: '闪充', label: '闪充', ifAuth: true, children: [] },
          { value: '首销日期', label: '首销日期', ifAuth: true, children: [] },
          { value: '蓝牙', label: '蓝牙', ifAuth: true, children: [] },
          { value: 'GPU', label: 'GPU', ifAuth: true, children: [] },
          { value: '变焦模式', label: '变焦模式', ifAuth: true, children: [] },
          { value: '三防标准', label: '三防标准', ifAuth: true, children: [] },
          { value: '其他属性', label: '其他属性', ifAuth: true, children: [] },
          { value: 'dw', label: 'dw', ifAuth: true, children: [] },
          { value: '机身材质工艺', label: '机身材质工艺', ifAuth: true, children: [] },
          { value: '前摄摄像头数量', label: '前摄摄像头数量', ifAuth: true, children: [] },
          { value: '机身厚度标准', label: '机身厚度标准', ifAuth: true, children: [] },
          { value: '机身材质分类', label: '机身材质分类', ifAuth: true, children: [] },
          { value: '无线充电', label: '无线充电', ifAuth: true, children: [] },
          { value: '前置摄像头', label: '前置摄像头', ifAuth: true, children: [] },
          { value: '分辨率', label: '分辨率', ifAuth: true, children: [] },
          { value: '屏幕形态', label: '屏幕形态', ifAuth: true, children: [] },
          { value: '屏幕材质类型', label: '屏幕材质类型', ifAuth: true, children: [] },
          { value: 'CPU核数', label: 'CPU核数', ifAuth: true, children: [] },
          { value: '双卡机类型', label: '双卡机类型', ifAuth: true, children: [] },
          { value: '后摄3摄像素', label: '后摄3摄像素', ifAuth: true, children: [] },
          { value: '后摄2摄像头的功能', label: '后摄2摄像头的功能', ifAuth: true, children: [] },
          { value: '后摄主摄像素', label: '后摄主摄像素', ifAuth: true, children: [] },
          { value: '其他', label: '其他', ifAuth: true, children: [] },
          { value: '价格', label: '价格', ifAuth: true, children: [] },
          { value: '操作系统版本', label: '操作系统版本', ifAuth: true, children: [] },
          { value: '无线视频传输', label: '无线视频传输', ifAuth: true, children: [] },
          { value: '语音识别', label: '语音识别', ifAuth: true, children: [] },
          { value: '老人机配置', label: '老人机配置', ifAuth: true, children: [] },
          { value: '触摸屏', label: '触摸屏', ifAuth: true, children: [] },
          { value: '入网型号', label: '入网型号', ifAuth: true, children: [] },
          { value: '超大字体', label: '超大字体', ifAuth: true, children: [] },
          { value: 'ROM', label: 'ROM', ifAuth: true, children: [] },
          { value: '生物识别', label: '生物识别', ifAuth: true, children: [] },
          { value: 'CPU型号', label: 'CPU型号', ifAuth: true, children: [] },
          { value: '常用功能', label: '常用功能', ifAuth: true, children: [] },
          { value: '操作系统', label: '操作系统', ifAuth: true, children: [] },
          { value: '拍照特点', label: '拍照特点', ifAuth: true, children: [] },
          { value: 'GPU型号', label: 'GPU型号', ifAuth: true, children: [] },
          { value: '游戏配置', label: '游戏配置', ifAuth: true, children: [] },
          { value: '屏幕刷新率', label: '屏幕刷新率', ifAuth: true, children: [] },
          { value: '屏幕评级或标准', label: '屏幕评级或标准', ifAuth: true, children: [] },
          { value: '视频播放格式', label: '视频播放格式', ifAuth: true, children: [] },
          { value: '指纹识别', label: '指纹识别', ifAuth: true, children: [] },
          { value: '电池容量（mAh）', label: '电池容量（mAh）', ifAuth: true, children: [] },
          { value: '音乐播放格式', label: '音乐播放格式', ifAuth: true, children: [] },
          { value: '机身颜色', label: '机身颜色', ifAuth: true, children: [] },
          { value: 'CPU品牌', label: 'CPU品牌', ifAuth: true, children: [] },
          { value: '耳机接口', label: '耳机接口', ifAuth: true, children: [] },
          { value: '充电接口类型', label: '充电接口类型', ifAuth: true, children: [] },
          { value: '副屏幕其他参数', label: '副屏幕其他参数', ifAuth: true, children: [] },
          { value: '开锁方式', label: '开锁方式', ifAuth: true, children: [] },
          { value: 'CPU系列', label: 'CPU系列', ifAuth: true, children: [] },
          { value: '热点', label: '热点', ifAuth: true, children: [] },
          { value: 'zmsz', label: 'z\'s', ifAuth: true, children: [] },
          { value: '快速充电', label: '快速充电', ifAuth: true, children: [] },
          { value: '充电器', label: '充电器', ifAuth: true, children: [] },
          { value: '屏幕前摄组合', label: '屏幕前摄组合', ifAuth: true, children: [] },
          { value: '机身厚度（mm）', label: '机身厚度（mm）', ifAuth: true, children: [] },
          { value: '充电功率', label: '充电功率', ifAuth: true, children: [] },
          { value: '详细参数', label: '详细参数', ifAuth: true, children: [] },
          { value: '门板形式', label: '门板形式', ifAuth: true, children: [] },
          { value: '5G网络', label: '5G网络', ifAuth: true, children: [] },
          { value: '产品名称', label: '产品名称', ifAuth: true, children: [] },
          { value: '后摄的主摄像素', label: '后摄的主摄像素', ifAuth: true, children: [] },
          { value: 'CPU频率', label: 'CPU频率', ifAuth: true, children: [] },
          { value: '主屏幕尺寸（英寸）', label: '主屏幕尺寸（英寸）', ifAuth: true, children: [] },
          { value: '电视播放', label: '电视播放', ifAuth: true, children: [] },
          { value: '传感器', label: '传感器', ifAuth: true, children: [] },
          { value: 'RAM', label: 'RAM', ifAuth: true, children: [] },
        ],
      },
      {
        value: '应用场景',
        label: '应用场景',
        ifAuth: true,
        children: [
          { value: '应用场合', label: '应用场合', ifAuth: true, children: [] },
          { value: '季节', label: '季节', ifAuth: true, children: [] },
          { value: '节假日', label: '节假日', ifAuth: true, children: [] },
          { value: 'IP', label: 'IP', ifAuth: true, children: [] },
          { value: '身体部位', label: '身体部位', ifAuth: true, children: [] },
          { value: '场所', label: '场所', ifAuth: true, children: [] },
          { value: '商品使用', label: '商品使用', ifAuth: true, children: [] },
        ],
      },
      {
        value: '包装',
        label: '包装',
        ifAuth: true,
        children: [
          { value: '商品包装', label: '商品包装', ifAuth: true, children: [] },
          { value: '物流包装', label: '物流包装', ifAuth: true, children: [] },
        ],
      },
      { value: '商品品牌', label: '商品品牌', ifAuth: true, children: [] },
      { value: '商品外观', label: '商品外观', ifAuth: true, children: [] },
      { value: '商品品质', label: '商品品质', ifAuth: true, children: [] },
      { value: '痛点', label: '痛点', ifAuth: true, children: [] },
      { value: '新词', label: '新词', ifAuth: true, children: [] },
      { value: '价格促销', label: '价格促销', ifAuth: true, children: [] },
      { value: '商品功能', label: '商品功能', ifAuth: true, children: [] },
      { value: '物流', label: '物流', ifAuth: true, children: [] },
      { value: '服务', label: '服务', ifAuth: true, children: [] },
      { value: '商品类别', label: '商品类别', ifAuth: true, children: [] },
      { value: '暂不需要', label: '暂不需要', ifAuth: true, children: [] },
      { value: '渠道', label: '渠道', ifAuth: true, children: [] },
    ],
    success: true,
  });

  res.send(ret);
});

router.post('/getSentenceList', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '手机',
          sentenceCnt: 361211649,
          status: null,
          dt: null,
          index: 0,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '华为',
          sentenceCnt: 119604383,
          status: null,
          dt: null,
          index: 1,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '华为手机',
          sentenceCnt: 84580764,
          status: null,
          dt: null,
          index: 2,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '手机华为',
          sentenceCnt: 76992481,
          status: null,
          dt: null,
          index: 3,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '苹果11',
          sentenceCnt: 62674167,
          status: null,
          dt: null,
          index: 4,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: 'IPHONE',
          sentenceCnt: 50581879,
          status: null,
          dt: null,
          index: 5,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '小米10',
          sentenceCnt: 39360389,
          status: null,
          dt: null,
          index: 6,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '小米手机',
          sentenceCnt: 38679386,
          status: null,
          dt: null,
          index: 7,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: '手机自营',
          sentenceCnt: 34789689,
          status: null,
          dt: null,
          index: 8,
          statusName: null,
          dataSourceName: null,
        },
        {
          id: null,
          itemFirstCateCd: '9987',
          itemFirstCateName: null,
          itemSecondCateCd: '653',
          itemSecondCateName: null,
          itemThirdCateCd: '655',
          itemThirdCateName: null,
          itemFourthCateCd: '-999',
          itemFourthCateName: null,
          aspect1: null,
          aspect2: null,
          aspect3: null,
          stdKeyWord: null,
          keyWord: null,
          keyWordCnt: null,
          sentence: 'IPHONE 11',
          sentenceCnt: 31750176,
          status: null,
          dt: null,
          index: 9,
          statusName: null,
          dataSourceName: null,
        },
      ],
      records: 1000,
      pageNum: 1,
      pageSize: 10,
      totalPage: 101,
    },
    success: true,
  });

  res.send(ret);
});

module.exports = router;