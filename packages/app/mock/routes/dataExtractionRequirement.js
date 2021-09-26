const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

router.get('/categories', function(req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    "data": [
      {
        "value": "1320",
        "label": "食品饮料",
        "ifAuth": true,
        "children": [
          {
            "value": "1585",
            "label": "饮料冲调",
            "ifAuth": true,
            "children": [
              {
                "value": "9434",
                "label": "牛奶乳品",
                "ifAuth": false,
                "children": [
                  {
                    "value": "17798",
                    "label": "牛奶",
                    "ifAuth": true,
                    "children": []
                  }
                ]
              }
            ]
          }
            ]
          }
        ]
  });

  res.send(ret);
});

router.get('/brands', function(req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    "data": [
      {
        "value": "150582",
        "label": "苏伯"
      },
      {
        "value": "180060",
        "label": "熊猫有礼"
      }
    ],  
  });

  res.send(ret);
});

module.exports = router;