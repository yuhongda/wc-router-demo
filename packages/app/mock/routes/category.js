const express = require('express');
const _ = require('lodash');
const router = express.Router();

// 根据数据渠道获取品类数据
router.post('/getJZCategory', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: Math.random() > 0 ?  [{"value":"8","label":"百货食品","ifAuth":true,"children":[{"value":"50026316","label":"咖啡/麦片/冲饮","ifAuth":true,"children":[{"value":"210605","label":"速溶咖啡/咖啡豆/粉","ifAuth":true,"children":[{"value":"50015962","label":"咖啡伴侣/辅料","ifAuth":true,"children":[{"value":"50002257","label":"奶精","ifAuth":true,"children":[]}]},{"value":"50002256","label":"速溶咖啡","ifAuth":true,"children":[{"value":"","label":"","ifAuth":true,"children":[]},{"value":"-999","label":"-999","ifAuth":true,"children":[]}]},{"value":"201150409","label":"咖啡液","ifAuth":true,"children":[{"value":"-999","label":"-999","ifAuth":true,"children":[]}]},{"value":"50012396","label":"咖啡礼盒","ifAuth":true,"children":[{"value":"","label":"","ifAuth":true,"children":[]},{"value":"-999","label":"-999","ifAuth":true,"children":[]}]},{"value":"50015956","label":"咖啡豆/粉","ifAuth":true,"children":[{"value":"50002255","label":"咖啡豆","ifAuth":true,"children":[]},{"value":"201150117","label":"挂耳咖啡","ifAuth":true,"children":[]},{"value":"50015958","label":"咖啡粉","ifAuth":true,"children":[]}]},{"value":"126104013","label":"胶囊咖啡","ifAuth":true,"children":[{"value":"","label":"","ifAuth":true,"children":[]},{"value":"-999","label":"-999","ifAuth":true,"children":[]}]}]},{"value":"50009857","label":"藕粉/麦片/冲饮品","ifAuth":true,"children":[{"value":"50016423","label":"奶茶","ifAuth":true,"children":[{"value":"50016424","label":"杯装奶茶","ifAuth":true,"children":[]},{"value":"50008436","label":"珍珠奶茶粉","ifAuth":true,"children":[]},{"value":"50011945","label":"袋装奶茶","ifAuth":true,"children":[]}]}]}]}]}] : null,
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

// 市场趋势-根据数据渠道获取品类数据
router.post('/getJZMarketCategory', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    data: [{"value":"670","label":"电脑、办公","ifAuth":true,"children":[{"value":"671","label":"电脑整机","ifAuth":true,"children":[{"value":"12798","label":"一体机","ifAuth":true,"children":[]}]}]},{"value":"16750","label":"个人护理","ifAuth":true,"children":[{"value":"16753","label":"身体护理","ifAuth":true,"children":[{"value":"16778","label":"润肤","ifAuth":true,"children":[]}]},{"value":"16751","label":"洗发护发","ifAuth":true,"children":[{"value":"11922","label":"洗发水","ifAuth":true,"children":[]}]}]},{"value":"9987","label":"手机通讯","ifAuth":true,"children":[{"value":"830","label":"手机配件","ifAuth":true,"children":[{"value":"13660","label":"充电器","ifAuth":true,"children":[]}]}]},{"value":"1320","label":"食品饮料","ifAuth":true,"children":[{"value":"1585","label":"饮料冲调","ifAuth":true,"children":[{"value":"3986","label":"咖啡/奶茶","ifAuth":true,"children":[{"value":"17807","label":"其它冲饮","ifAuth":true,"children":[]},{"value":"17810","label":"咖啡豆/粉","ifAuth":true,"children":[]},{"value":"17811","label":"咖啡伴侣","ifAuth":true,"children":[]}]}]}]},{"value":"15901","label":"家庭清洁/纸品","ifAuth":true,"children":[{"value":"15902","label":"清洁纸品","ifAuth":true,"children":[{"value":"15908","label":"抽纸","ifAuth":true,"children":[]},{"value":"15909","label":"卷纸","ifAuth":true,"children":[]}]}]},{"value":"737","label":"家用电器","ifAuth":true,"children":[{"value":"794","label":"大家电","ifAuth":true,"children":[{"value":"880","label":"洗衣机","ifAuth":true,"children":[]},{"value":"878","label":"冰箱","ifAuth":true,"children":[]}]}]}],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

module.exports = router;
