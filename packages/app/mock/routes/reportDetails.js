const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

router.post('/getPage', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, resultData, {
    code: '0',
    data: [
      {
        children: [
          {
            catelogId: '1',
            catelogName: '行业分析',
            id: '1',
            pageName: '行业销售额趋势',
            sortNo: '1',
          },
          {
            catelogId: '1',
            catelogName: '行业分析',
            id: '2',
            pageName: '行业销量趋势',
            sortNo: '2',
          },
        ],
        cataLogId: '1',
        cataLogName: '行业分析',
      },
      {
        children: [
          {
            catelogId: '2',
            catelogName: '行业舆情分析',
            id: '3',
            pageName: '媒体曝光度趋势',
            sortNo: '1',
          },
          {
            catelogId: '2',
            catelogName: '行业舆情分析',
            id: '4',
            pageName: '品类舆论倾向性',
            sortNo: '2',
          },
        ],
        cataLogId: '2',
        cataLogName: '行业舆情分析',
      },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

module.exports = router;
