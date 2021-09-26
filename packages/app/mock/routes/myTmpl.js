const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

const stateMap = {
  edit: '编辑中',
  checking: '待验收',
  withdraw: '已撤回',
  pass: '已验收',
  reject: '被驳回'
};

router.post('/list', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData, {
    data: {
      "pageSize": 10,
      "records": 28,
      "pageNum": 1,
      "rows": [
          {
            "id": 118,
            "tempId": "1254122",
            "tempName": "\u6d4b\u8bd5\u5185\u5bb9w63v",
            "createPin": "zhangyao22",
            "updateDate": 1578983977000,
            "state": '1',
            "stateDes": "未共享",
          },
          {
            "id": 110,
            "tempId": "323222",
            "tempName": "\u6d4b\u8bd5\u5185\u5bb9w63v",
            "createPin": "liyifang",
            "updateDate": 15732483977000,
            "state": '2',
            "stateDes": "已共享",
        }
      ],
      "totalPage": 3
    },
  });
  res.send(ret);
});

router.post('/recommend', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData, {
    data: {}
  });
  res.send(ret);
});

module.exports = router;