const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');
const moment = require('moment');

router.post('/getHisList', function(req, res) {
  res.type('json');
  const params = req.query;
  const ret = {
    ...resultData,
    data: {
      pageNum: null,
      pageSize: null,
      totalPage: null,
      records: 22,
      rows: _.times(10, i => ({
        id: `${i}`,
        name: `任务名称任务名称任务名称任务名称${i}`,
        createDate: `${moment().unix()}`,
        creator: `ERP名字${i}`,
        state: i % 3,
        stateDesc: i % 3 == 0 ? '进行中' : i % 3 == 1 ? '已完成' : i % 3 == 2 ? '任务失败' : '',
        count: i * 1000,
        fileUrl: 'http://storage.jd.local/appdownload/aTest/taskDownloadFile.xlsx',
      })),
    },
  };
  res.send(ret);
});

router.post('/getDetail', function(req, res) {
  res.type('json');
  const ret = {
    ...resultData,
    data: {
      id: 1,
      brandCode: '101573',
      brandName: '妈咪宝贝',
      itemFirstCateCd: '15901',
      itemFirstCateName: '家庭清洁/纸品',
      itemSecondCateCd: '15902',
      itemSecondCateName: '清洁纸品',
      itemThirdCateCd: '15910',
      itemThirdCateName: '手帕纸',
      itemFourthCateCd: '-999',
      itemFourthCateName: '-999',

      timeDimension: 0,
      dataDimension: 1,
      saleTarget: '0,1,2,3',

      timeRangeValueDesc: '近12个月， 近13-24个月',
      timeDimensionDesc: '年',
      dataDimensionDesc: 'SKU',
      saleTargetDescList: ['销售额', '销量', '子订单量', '父订单量'],
      pvTargetDescList: ['PV', 'UV'],
    },
  };
  res.send(ret);
});

router.post('/getStateEnum', function(req, res) {
  res.type('json');
  const params = req.query;
  const ret = {
    ...resultData,
    data: [
      {
        name: '全部',
        code: 1,
      },
      {
        name: '已完成',
        code: 2,
      },
      {
        name: '任务中',
        code: 3,
      },
      {
        name: '任务失败',
        code: 4,
      },
    ],
  };
  res.send(ret);
});

module.exports = router;
