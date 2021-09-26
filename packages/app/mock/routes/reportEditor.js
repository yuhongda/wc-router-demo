const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

router.post('/getReportBase', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, resultData, {
    code: '0',
    data: {
      brandId: 13888,
      brandName: null,
      categoryFourId: 1,
      categoryFourName: 1,
      categoryOneId: 15901,
      categoryOneName: '家庭清洁/纸品',
      categoryThreeId: 11922,
      categoryThreeName: '洗发水',
      categoryTwoId: 15901,
      categoryTwoName: '家庭环境清洁',
      checkUser: 1,
      createTime: 1574994166000,
      createUser: 'bjhsy',
      id: 7,
      reportId: '1',
      reportName: 'test',
      reportPartition: null,
      state: 'edit',
      submitTime: 1574994166000,
      updateTime: 1574994166000,
      userType: 'erp',
      yn: 1,
    },
    msg: '请求成功',
    success: true,
  });

  res.send(ret);
});

router.post('/getPage', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, resultData, {
    code: '0',
    data1: [
      {
        children: [
          {
            catelogId: '1',
            catelogName: '行业分析',
            id: '1_1',
            pageName: '行业销售额趋势',
            sortNo: '1',
            description:
              '页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明',
          },
          {
            catelogId: '1',
            catelogName: '行业分析',
            id: '1_2',
            pageName: '行业销量趋势',
            sortNo: '2',
            description:
              '页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明',
          },
          {
            catelogId: '1',
            catelogName: '行业分析',
            id: '1_3',
            pageName: '同级品类销售额增速与同比',
            sortNo: '3',
            description:
              '页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明',
          },
        ],
        cataLogId: '1',
        cataLogName: '行业分析',
        sortNo: '1',
      },
      {
        children: [
          {
            catelogId: '2',
            catelogName: '行业舆情分析',
            id: '2_1',
            pageName: '媒体曝光度趋势',
            sortNo: '1',
            description:
              '页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明',
          },
          {
            catelogId: '2',
            catelogName: '行业舆情分析',
            id: '2_2',
            pageName: '品类舆论倾向性',
            sortNo: '2',
            description:
              '页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明',
          },
        ],
        cataLogId: '2',
        cataLogName: '行业舆情分析',
        sortNo: '2',
      },
      {
        cataLogId: '3',
        cataLogName: '高关联分析',
        sortNo: '3',
      },
    ],
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

router.post('/getDetail', function(req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  // test
  const d = {
    dt: '2019-10-31',
    dbName: 'app_vdp_c2mn_growth_sales_ord_ma',
    modelId: 7,
    slideType: 1,
    chartData: [
      {
        chartType: 'bar',
        chartOption: {
          yAxis: { unit: '' },
          xAxis: { unit: '' },
          yAxisRight: { unit: '', show: false },
          colorListIndex: 1,
          title: { show: false, text: '', position: 'center', textStyle: {} },
        },
        dimension: [
          {
            fieldName: '近1-12个月销量',
            fieldKey: 'sale_qtty_12month',
            options: { averageOption: true, sortOption: true, countOption: true, sumOption: true },
            originData: {
              fieldName: '近1-12个月销量',
              combinatorialValue: 'attr11',
              fieldCode: 'sale_qtty_12month',
              label: '近1-12个月销量',
              isIndex: 0,
              isSummary: 0,
              type: 1,
              isCallEnum: '0',
              dragMark: '43',
              fieldType: 'bigint',
            },
            fieldKeyAlias: 'sale_qtty_12month_YaLFAEVL',
            type: 'dimension',
            whereType: 'radioGroup',
          },
        ],
        valueList: [
          {
            fieldName: '近1-12个月销售额',
            fieldKey: 'gmv_12month',
            chartDataOption: { label: { show: true, position: 'insideTop' }, type: 'bar', yAxisIndex: 0 },
            options: { averageOption: true, sortOption: true, countOption: true, sumOption: true },
            originData: {
              fieldName: '近1-12个月销售额',
              fieldCode: 'gmv_12month',
              isIndex: 1,
              isSummary: 0,
              isCallEnum: '0',
              dragMark: '0',
              fieldType: 'double',
            },
            fieldKeyAlias: 'gmv_12month_jxxhe5Pi',
            type: 'value',
            selectedOption: { sumOption: true },
            whereType: 'radioGroup',
          },
        ],
        where: [
          {
            fieldName: '四级品类名称',
            data: [{ code: '17542', name: '其他综合器械' }],
            fieldKey: 'item_fourth_cate_name',
            options: { averageOption: true, sortOption: true, countOption: true, sumOption: true },
            originData: {
              fieldName: '四级品类名称',
              fieldCode: 'item_fourth_cate_name',
              isIndex: 2,
              isSummary: 0,
              type: 3,
              isCallEnum: '1',
              dragMark: '3',
              fieldType: 'varchar',
            },
            type: 'where',
            whereType: 'radioGroup',
          },
        ],
      },
    ],
    reportId: '1',
    requestFieldDto: {
      thirdCateField: 'item_third_cate_cd',
      fourthCateField: 'item_fourth_cate_cd',
      dtField: 'dt',
      brandCodeField: null,
    },
    cateBrandDto: { itemFourthCateCd: '17542', itemThirdCateCd: '12109' },
  };

  Object.assign(ret, resultData, {
    code: '0',
    data: {
      catalogName: '分类1',
      catelogId: '1',
      description:
        '页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明页面说明',
      id: '1',
      loginPin: '测试内容d3u5',
      modified_date: '2019-11-11 00:00:00',
      pageName: '销售趋势',
      queryList: d,
      reportId: 'xxx分析报告',
      sortNo: '1',
    },
    msg: '成功',
    success: true,
  });

  res.send(ret);
});

module.exports = router;
