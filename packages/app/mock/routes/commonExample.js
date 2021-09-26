const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');
const { mockMenus, mockLang } = require('./json/data');
//加载用户信息
router.post('/user', function (req, res) {
  res.type('json');
  const params = req.query;
  const ret = {
    ...resultData,
    data: {
      pin: 'yangbin185',
      name: '杨斌',
      email: null,
      role: 'operator',
      menus: [
        { id: 128, code: 'content', name: '内容', parent: null, order: null, path: '/', sysDefine: 'npd-platform' },
      ],
      authFunction: [
        'NPD.ReportAcceptance',
        'NPD.RecommendMaterialManagement',
        'NPD.ReportDownload',
        'NPD.TmplShareManagement',
        'NPD.TmplSetRecommendManagement',
        'NPD.DemandReceiveManagement',
        'NPD.DemandDispatchManagement',
        'NPD.DemandShowManagement',
        'NPD.CategoryShowManagement',
        'NPD.DataExtractionHistoryDownload',
        'NPD.DataExtractionShowMenu',
        'NPD.DataExtractionRequirement',
        'NPD.DataExtractionDimension',
        'NPD.DataExtractionHistory',
        'NPD.GoodsMonitorListManagement',
        'NPD.GoodsFollowManagement',
        'NPD.MarketTrendManagement',
        'NPD.MarketFollowManagement',
        'NPD.WorkMenuManagement',
        'NPD.MyReportMenuManagement',
        'NPD.MaterialMenuManagement',
        'NPD.TmplMenuManagement',
        'NPD.ReportTabMyReportVisible',
        'NPD.ReportTabReportDraftVisible',
        'NPD.CreateReportButtonVisible',
        'NPD.ReportEditCreateButtonVisible',
        'NPD.ReportEditAddButtonVisible',
        'NPD.ReportEditEditButtonVisible',
        'NPD.ReportEditDeleteButtonVisible',
        'NPD.BaseDataMenuVisible',
        'NPD.BaseDataMenuUpdateButtonVisible',
        'NPD.BaseDataMenuDownUploadButtonVisible',
        'NPD.DebugPageMenuManagement',
        'NPD.ReportEditCopyButtonVisible',
        'NPD.DataExtractionRequirementSku',
      ],
    },
  };
  res.send(ret);
});

//加载系统菜单
router.get('/menus', function (req, res) {
  res.type('json');
  const params = req.query;
  const ret = { ...resultData, data: mockMenus[params.lang] };
  res.send(ret);
});

//加载语言信息
router.get('/lang', function (req, res) {
  res.type('json');
  const params = req.query;
  const ret = { ...resultData, data: mockLang[params.lang] };
  res.send(ret);
});

//登出系统
router.get('/logout', function (req, res) {
  res.status(401).send('user is logout!!!');
});

router.post('/getChannels', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: [
      { code: '1000000', name: '全站' },
      { code: '1001000', name: '秒杀' },
      { code: '1001001', name: '秒杀-单品秒杀' },
      { code: '1001002', name: '秒杀-每日特价' },
    ],
    success: true,
  });

  res.send(ret);
});
router.post('/userCheck', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '成功',
    data: {
      userPin: 'lichunxiao15',
      name: '李春晓',
      company: null,
      depart: '京东集团-京东零售-智能供应链Y业务部-供应链产品及研发部-供应链创新研发组',
      email: 'lichunxiao15@jd.com',
      phone: null,
      userType: null,
      categoryList: null,
      brandList: null,
    },
    success: true,
  });

  res.send(ret);
});

module.exports = router;
