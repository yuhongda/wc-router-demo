const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');
const data = require('./json/myListData.json');

router.post('/myList', function(req, res) {
  res.type('json');
  /*
  let ret = {};
  Object.assign(ret, resultData, {
    data: {
      records: 234,
      rows: _.times(10, i => {
        return {
          backgroundImg: 'http://img30.360buyimg.com/merchants/jfs/t1/69661/10/16008/7356/5dd74f43Eba797bef/514799eb6aab6e10.jpg', // 素材背景图	string
          coverImg: 'http://n.sinaimg.cn/sinacn18/133/w1040h693/20180322/5c3b-fysnevk7165512.jpg', //素材封面图	string
          creator: 'zhangyao22', //素材提供人	string
          createdDate: '2019-11-22 09:36:44', //创建时间	string
          isAvailable: '1', //是否有效：0否 1是	string
          materialID: i + '', //素材ID	string
          materialName: '销售同比分析', //素材名称	string
          status: '1' //素材状态（备用）	string
        };
      })
    }
  });
  res.send(ret);
  */
  res.send(data);
});
router.post('/recommendList', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData, {
    data: {
      records: 234,
      rows: _.times(10, i => {
        return {
          coverImg: 'http://n.sinaimg.cn/sinacn18/133/w1040h693/20180322/5c3b-fysnevk7165512.jpg', //素材封面图	string
          createdDate: '2019-11-22 09:36:44', //创建时间	string
          isAvailable: '1', //是否有效：0否 1是	string
          materialID: i + '', //素材ID	string
          materialName: '销售同比分析', //素材名称	string
          status: i % 2 ? '1' : '0' //素材状态（备用）	string
        };
      })
    }
  });
  res.send(ret);
});
router.post('/delete', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData);
  res.send(ret);
});
router.post('/deleteRecommend', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData);
  res.send(ret);
});
router.post('/pick', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData);
  res.send(ret);
});
router.post('/recommend', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData);
  res.send(ret);
});
router.get('/types', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData, {
    data: {
      all: '全部',
      attr: '属性',
      brand: '品牌',
      cate: '品类',
      other: '其他'
    }
  });
  res.send(ret);
});

router.post('/preview', function(req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData, {
    data: {
      coverImg: 'http://img30.360buyimg.com/merchants/jfs/t1/69661/10/16008/7356/5dd74f43Eba797bef/514799eb6aab6e10.jpg', //素材图片	string
      dataSource: 'app_c2m_cate_brand_attr_trend', //数据来源	string
      description: '数据说明XXXXXXXXXXXXXXXXXXXX', //说明	string
      materialId: '1', //素材ID	string
      materialName: '素材1', //素材名称	string
    }
  });
  res.send(ret);
});

module.exports = router;
