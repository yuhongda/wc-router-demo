const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

router.get('/getModData', function(req, res) {
  res.type('json');
  let params = req.query,
    ret = {};

  Object.assign(ret, resultData, {
    data: _.random(0, 1000)
  });

  res.send(ret);
});

module.exports = router;
