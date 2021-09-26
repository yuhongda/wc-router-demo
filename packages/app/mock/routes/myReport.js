const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { resultData } = require('../common/utils');

const stateMap = {
  edit: '编辑中',
  checking: '待验收',
  withdraw: '已撤回',
  pass: '已验收',
  reject: '被驳回',
  buscheck: '待运营验收',
  busreject: '运营驳回',
  purcheck: '待采销验收',
  brandcheck: '待品牌验收',
  brandreject: '品牌驳回',
};

router.post('/uploadOperationFile', function (req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    data: [],
  });

  res.send(ret);
});

router.post('/mylist', function (req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    data: {
      records: 234,
      rows: _.times(10, (i) => {
        const maybeStatus = [
          'checking',
          'withdraw',
          'pass',
          'reject',
          'buscheck',
          'busreject',
          'purcheck',
          'purreject',
          'brandcheck',
          'brandreject',
        ];
        const state = maybeStatus[i % 10];
        const stateName = stateMap[state];
        return {
          categoryFourName: '', //四级分类名称	string
          categoryOneName: '家用电器', //一级分类名称	string
          categoryThreeName: '空调', //三级分类名称	string
          categoryTwoName: '大家电', //二级分类名称	string
          checkUser: '李四', //审核人	string
          createTime: 1233123123, //创建时间	number
          createTimeString: '2019-11-11 12:12:23', //创建时间格式化	string
          createUser: '张三', //提交人	string
          id: i, //number
          reportId: 'asdfasdf', //报告ID	string
          reportName: 'xxxx报告', //报告名称	string
          state: state, //状态(edit,checking,withdraw,pass,reject)	string
          stateName: stateName, //状态(编辑中,待验收,已撤回,已验收,被驳回)	string
          submitTime: 123123123123, //提交时间	number
          submitTimeString: '2019-11-11 12:12:23', //提交时间格式化	string
          updateTime: 123123123123, //更新时间	number
          updateTimeString: '2019-11-11 12:12:23', //更新时间格式化	string
        };
      }),
    },
  });

  res.send(ret);
});

router.post('/type', function (req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    data: [
      { code: '0', name: '待处理' },
      { code: '1', name: '已分配' },
      { code: '2', name: '已领取' },
      { code: '6', name: '已完成' },
    ],
  });

  res.send(ret);
});

router.post('/list', function (req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [
        {
          id: 1036,
          itemFirstCateCd: 1316,
          itemFirstCateName: '美妆护肤',
          itemSecondCateCd: 1381,
          itemSecondCateName: '面部护肤',
          itemThirdCateCd: 1389,
          itemThirdCateName: '洁面',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 652719,
          brandName: '京喜（JAIXI）',
          createDate: '2021-03-29 22:05:48',
          updateDate: '2021-03-29 22:05:48',
          creator: 'test_pop_y008',
          operator: null,
          reqId: 'B-FNcU2ktH',
          reqName: '上头条',
          state: 0,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: '2',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
          state: 4,
          stateDesc: '已驳回',
        },
        {
          id: 1035,
          itemFirstCateCd: 1316,
          itemFirstCateName: '美妆护肤',
          itemSecondCateCd: 1381,
          itemSecondCateName: '面部护肤',
          itemThirdCateCd: 1389,
          itemThirdCateName: '洁面',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 15247,
          brandName: '沙宣（VS）',
          createDate: '2021-03-29 22:05:29',
          updateDate: '2021-03-29 22:05:29',
          creator: 'test_pop_y008',
          operator: null,
          reqId: 'B-HKorUUIH',
          reqName: '深层次',
          state: 0,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: 's',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
          state: 5,
          stateDesc: '已99回',
        },
        {
          id: 1033,
          itemFirstCateCd: 16750,
          itemFirstCateName: '个人护理',
          itemSecondCateCd: 16751,
          itemSecondCateName: '洗发护发',
          itemThirdCateCd: 16756,
          itemThirdCateName: '洗发水',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 15247,
          brandName: '沙宣（VS）',
          createDate: '2021-03-29 21:26:25',
          updateDate: '2021-03-29 21:27:13',
          creator: '测试供应商',
          operator: 'lianguo7',
          reqId: 'B-sBMDJCOE',
          reqName: '全流程测试',
          state: 2,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: 'lianguo7',
          writerType: 'ERP',
          channelDesc: '全站',
          stateDesc: '已领取',
          memo: '看看流程能不能跑通',
          reportId: 'tdXH61pM',
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 2,
          brandChannel: '1000000',
          followers: 'suhang22,zhaojing57',
        },
        {
          id: 1032,
          itemFirstCateCd: 15901,
          itemFirstCateName: '家庭清洁/纸品',
          itemSecondCateCd: 15903,
          itemSecondCateName: '清洁用具',
          itemThirdCateCd: 15916,
          itemThirdCateName: '垃圾桶',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 652719,
          brandName: '京喜（JAIXI）',
          createDate: '2021-03-29 21:08:53',
          updateDate: '2021-03-29 21:08:53',
          creator: 'test_pop_lz10',
          operator: null,
          reqId: 'B-NvZSQgPt',
          reqName: '全部不展示',
          state: 0,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: 'ccccccccc',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
        },
        {
          id: 1031,
          itemFirstCateCd: 1316,
          itemFirstCateName: '美妆护肤',
          itemSecondCateCd: 1381,
          itemSecondCateName: '面部护肤',
          itemThirdCateCd: 1389,
          itemThirdCateName: '洁面',
          itemFourthCateCd: -999,
          itemFourthCateName: '-999',
          brandCode: 10833,
          brandName: '兰蔻（LANCOME）',
          createDate: '2021-03-29 19:39:33',
          updateDate: '2021-03-29 19:39:33',
          creator: 'test_pop_y008',
          operator: null,
          reqId: 'B-w6yzXA8z',
          reqName: 'ssdad',
          state: 0,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: 's s s',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
        },
        {
          id: 1028,
          itemFirstCateCd: 9987,
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: 653,
          itemSecondCateName: '手机',
          itemThirdCateCd: 655,
          itemThirdCateName: '手机',
          itemFourthCateCd: null,
          itemFourthCateName: null,
          brandCode: 38126,
          brandName: '美图（meitu）[38126]',
          createDate: '2021-03-29 18:30:28',
          updateDate: '2021-03-29 19:57:23',
          creator: 'zhangyao22',
          operator: 'zhangyao22',
          reqId: 'R-VAJ8AFXv',
          reqName: '3435',
          state: 6,
          channel: '1000000',
          creatorType: 'ERP',
          writer: 'zhangyao22',
          writerType: 'ERP',
          channelDesc: '全站',
          stateDesc: '已完成',
          memo: '',
          reportId: 'a5bnhJuf',
          subAccType: 0,
          requireType: 2,
          requireTypeDesc: '前台点选',
          brandState: 2,
          brandChannel: null,
          followers: null,
        },
        {
          id: 1022,
          itemFirstCateCd: 1316,
          itemFirstCateName: '美妆护肤',
          itemSecondCateCd: 1381,
          itemSecondCateName: '面部护肤',
          itemThirdCateCd: 1389,
          itemThirdCateName: '洁面',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 652719,
          brandName: '京喜（JAIXI）',
          createDate: '2021-03-29 18:05:45',
          updateDate: '2021-03-29 18:05:45',
          creator: 'test_pop_lz10',
          operator: null,
          reqId: 'B-41zEa1qR',
          reqName: '63657',
          state: 0,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: '75768',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
        },
        {
          id: 1021,
          itemFirstCateCd: 1316,
          itemFirstCateName: '美妆护肤',
          itemSecondCateCd: 1381,
          itemSecondCateName: '面部护肤',
          itemThirdCateCd: 1389,
          itemThirdCateName: '洁面',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 652719,
          brandName: '京喜（JAIXI）',
          createDate: '2021-03-29 18:00:37',
          updateDate: '2021-03-29 18:00:37',
          creator: 'test_pop_lz10',
          operator: null,
          reqId: 'B-AY8ykyru',
          reqName: '验证权限',
          state: 0,
          channel: '1001001',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '秒杀-单品秒杀',
          stateDesc: '待处理',
          memo: '4234345345',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
        },
        {
          id: 1020,
          itemFirstCateCd: 9987,
          itemFirstCateName: '手机通讯',
          itemSecondCateCd: 653,
          itemSecondCateName: '手机',
          itemThirdCateCd: 655,
          itemThirdCateName: '手机',
          itemFourthCateCd: null,
          itemFourthCateName: null,
          brandCode: 38126,
          brandName: '美图（meitu）[38126]',
          createDate: '2021-03-29 17:54:36',
          updateDate: '2021-03-29 17:54:36',
          creator: 'zhangyao22',
          operator: null,
          reqId: 'R-ddQh7cNn',
          reqName: 'rtrtrrrtrrrr让他仍然让人3',
          state: 0,
          channel: '1000000',
          creatorType: 'ERP',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: '',
          reportId: null,
          subAccType: null,
          requireType: 0,
          requireTypeDesc: '全品类',
          brandState: null,
          brandChannel: null,
          followers: null,
        },
        {
          id: 1019,
          itemFirstCateCd: 1316,
          itemFirstCateName: '美妆护肤',
          itemSecondCateCd: 1381,
          itemSecondCateName: '面部护肤',
          itemThirdCateCd: 1389,
          itemThirdCateName: '洁面',
          itemFourthCateCd: -999,
          itemFourthCateName: '全部',
          brandCode: 652719,
          brandName: '京喜（JAIXI）',
          createDate: '2021-03-29 17:22:37',
          updateDate: '2021-03-29 17:22:37',
          creator: 'test_pop_lz10',
          operator: null,
          reqId: 'B-FdURrSUL',
          reqName: '1',
          state: 0,
          channel: '1000000',
          creatorType: 'PASSPORT',
          writer: null,
          writerType: '',
          channelDesc: '全站',
          stateDesc: '待处理',
          memo: '1111',
          reportId: null,
          subAccType: null,
          requireType: 3,
          requireTypeDesc: '品牌端提交',
          brandState: 0,
          brandChannel: '2000000',
          followers: '',
        },
      ],
      records: 349,
      pageNum: 1,
      pageSize: 10,
      totalPage: 35,
    },
    success: true,
  });
  res.send(ret);
});

router.post('/checklist', function (req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    data: {
      records: 234,
      rows: _.times(10, (i) => {
        const maybeStatus = ['checking', 'withdraw', 'pass', 'reject'];
        const state = maybeStatus[i % 4];
        const stateName = stateMap[state];
        return {
          categoryFourName: '', //四级分类名称	string
          categoryOneName: '家用电器', //一级分类名称	string
          categoryThreeName: '空调', //三级分类名称	string
          categoryTwoName: '大家电', //二级分类名称	string
          checkUser: '李四', //审核人	string
          createTime: 1233123123, //创建时间	number
          createTimeString: '2019-11-11 12:12:23', //创建时间格式化	string
          createUser: '张三', //提交人	string
          id: i, //number
          reportId: 'asdfasdf', //报告ID	string
          reportName: 'xxxx报告', //报告名称	string
          state: state, //状态(edit,checking,withdraw,pass,reject)	string
          stateName: stateName, //状态(编辑中,待验收,已撤回,已验收,被驳回)	string
          submitTime: 123123123123, //提交时间	number
          submitTimeString: '2019-11-11 12:12:23', //提交时间格式化	string
          updateTime: 123123123123, //更新时间	number
          updateTimeString: '2019-11-11 12:12:23', //更新时间格式化	string
          followers: 'bjwangsha,lianguo7',
        };
      }),
    },
  });

  res.send(ret);
});

router.post('/draftlist', function (req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    data: {
      records: 234,
      rows: _.times(10, (i) => {
        const state = 'edit';
        const stateName = stateMap[state];
        return {
          categoryFourName: '', //四级分类名称	string
          categoryOneName: '家用电器', //一级分类名称	string
          categoryThreeName: '空调', //三级分类名称	string
          categoryTwoName: '大家电', //二级分类名称	string
          checkUser: '李四', //审核人	string
          createTime: 1233123123, //创建时间	number
          createTimeString: '2019-11-11 12:12:23', //创建时间格式化	string
          createUser: '张三', //提交人	string
          id: i, //number
          reportId: 'asdfasdf', //报告ID	string
          reportName: 'xxxx报告', //报告名称	string
          state: state, //状态(edit,checking,withdraw,pass,reject)	string
          stateName: stateName, //状态(编辑中,待验收,已撤回,已验收,被驳回)	string
          submitTime: 123123123123, //提交时间	number
          submitTimeString: '2019-11-11 12:12:23', //提交时间格式化	string
          updateTime: 123123123123, //更新时间	number
          updateTimeString: '2019-11-11 12:12:23', //更新时间格式化	string
        };
      }),
    },
  });

  res.send(ret);
});

router.post('/operationlog', function (req, res) {
  res.type('json');
  let ret = {};

  Object.assign(ret, resultData, {
    data: _.times(3, (i) => {
      const state = 'edit';
      const stateName = stateMap[state];
      return {
        comment: '', //说明
        date: 123123123123, //操作时间	number
        dateString: '2019-11-11 12:12:23', //操作时间字符串	string
        id: i, //	number
        operation: 'submit', //操作类型	string
        operator: '李小明', //操作人	string
        state: 'submitted', //状态	string
        stateName: '已经提交', //状态名称	string
      };
    }),
  });

  res.send(ret);
});

router.post('/operation', function (req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, {
    code: '200',
    success: false,
    msg: '报告名已存在',
    data: null,
  });
  res.send(ret);
});

router.post('/create', function (req, res) {
  res.type('json');
  let ret = {};
  if (Math.random() > 0.5) {
    Object.assign(ret, resultData, {
      code: '200',
      success: false,
      msg: '报告名已存在',
    });
  } else {
    Object.assign(ret, resultData);
  }
  res.send(ret);
});

router.get('/getCategory', function (req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, resultData, {
    data: [
      {
        value: '9987',
        label: '手机通讯',
        ifAuth: true,
        children: [
          {
            value: '653',
            label: '手机',
            ifAuth: true,
            children: [{ value: '655', label: '手机', ifAuth: true, children: [] }],
          },
        ],
      },
      {
        value: '16750',
        label: '个人护理',
        ifAuth: true,
        children: [
          {
            value: '16755',
            label: '口腔护理',
            ifAuth: true,
            children: [
              { value: '16813', label: '口喷', ifAuth: true, children: [] },
              { value: '16808', label: '牙贴', ifAuth: true, children: [] },
              { value: '16806', label: '牙膏', ifAuth: true, children: [] },
              { value: '16812', label: '漱口水', ifAuth: true, children: [] },
            ],
          },
        ],
      },
      {
        value: '1320',
        label: '食品饮料',
        ifAuth: true,
        children: [
          {
            value: '1583',
            label: '休闲食品',
            ifAuth: true,
            children: [
              {
                value: '1595',
                label: '饼干蛋糕',
                ifAuth: true,
                children: [
                  { value: '17716', label: '面包', ifAuth: true, children: [] },
                  { value: '17714', label: '中式糕点', ifAuth: true, children: [] },
                  { value: '17713', label: '西式糕点', ifAuth: true, children: [] },
                  { value: '17715', label: '饼干', ifAuth: true, children: [] },
                ],
              },
            ],
          },
          {
            value: '1584',
            label: '粮油调味',
            ifAuth: true,
            children: [
              {
                value: '2676',
                label: '食用油',
                ifAuth: true,
                children: [
                  { value: '17685', label: '其它油', ifAuth: true, children: [] },
                  { value: '17679', label: '调和油', ifAuth: true, children: [] },
                  { value: '17681', label: '菜籽油', ifAuth: true, children: [] },
                  { value: '17680', label: '葵花籽油', ifAuth: true, children: [] },
                  { value: '17684', label: '亚麻油/火麻油', ifAuth: true, children: [] },
                  { value: '17682', label: '山茶油', ifAuth: true, children: [] },
                  { value: '17677', label: '花生油', ifAuth: true, children: [] },
                  { value: '17676', label: '玉米油', ifAuth: true, children: [] },
                  { value: '17683', label: '橄榄油', ifAuth: true, children: [] },
                  { value: '17678', label: '大豆油', ifAuth: true, children: [] },
                ],
              },
            ],
          },
        ],
      },
      {
        value: '6196',
        label: '厨具',
        ifAuth: true,
        children: [
          {
            value: '6197',
            label: '烹饪锅具',
            ifAuth: true,
            children: [{ value: '6199', label: '炒锅', ifAuth: true, children: [] }],
          },
        ],
      },
    ],
  });
  res.send(ret);
});

router.get('/getBrand', function (req, res) {
  res.type('json');
  let ret = {};
  if (Math.random() > 0.5) {
    Object.assign(ret, resultData, {
      data: [
        { value: '57779', label: 'Swisse' },
        { value: '197964', label: 'Elta MD' },
        { value: '7046', label: '芙丽芳丝（Freeplus）' },
        { value: '270002', label: '珊珂' },
        { value: '13676', label: '欧莱雅（LOREAL）' },
      ],
    });
  } else {
    Object.assign(ret, resultData, {
      data: [
        { value: '42080', label: '悦诗风吟（Innisfree）' },
        { value: '16247', label: '丝塔芙（Cetaphil）' },
        { value: '324056', label: '马丁（Martin）' },
        { value: '128744', label: '资生堂' },
        { value: '80044', label: '珂润（Curel）' },
        { value: '13888', label: "旁氏（POND'S）" },
      ],
    });
  }
  res.send(ret);
});

router.post('/getPurchaseCheckList', function (req, res) {
  res.type('json');
  const params = req.body,
    ret = {};

  Object.assign(ret, {
    code: '0',
    msg: '请求成功',
    data: {
      rows: [
        {
          id: 3235,
          reportId: 't9XMh6rF',
          reportName: '532 2021-03-19 22:45:58',
          state: '0',
          stateName: '待审核',
          categoryOneId: 15901,
          categoryOneName: '家庭清洁/纸品',
          categoryTwoId: 15903,
          categoryTwoName: '清洁用具',
          categoryThreeId: 15916,
          categoryThreeName: '垃圾桶',
          categoryFourId: -999,
          categoryFourName: null,
          brandId: 28952,
          brandName: null,
          createTime: 1616165158000,
          createTimeString: '2021-03-19 22:45:58',
          createUser: 'zhangyao22',
          createSource: null,
          updateTime: 1616165276000,
          updateTimeString: '',
          submitTime: 1616161288000,
          submitTimeString: '2021-03-19 21:41:28',
          checkUser: 'zhangyao22',
          reportPartition: '2020-08-31',
          reqId: 'R-AZMnCH3C',
          channel: '1000000',
          channelDesc: '全站',
          source: '2',
          sourceDesc: '领取',
          colorIndex: null,
          skuCount: 1,
          fileUrl:
            'http://storage.jd.com/report-pdf/t9XMh6rF-2019%E5%B9%B4%E4%B8%93%E4%B8%9A%E5%BA%8F%E5%88%97%E6%99%8B%E5%8D%87%E8%BF%B0%E8%81%8C-%E5%BC%A0%E5%B0%A7.pdf?Expires=1624805272&AccessKey=XgiAcZPiuspqBeT8&Signature=qKLtiaVckX8UCtFjBV5Azz%2F7kIM%3D',
          followers: 'zhangyao22',
          purchaseCheckState: null,
          purchaseCheckStateDesc: null,
          reportType: 1,
          brandCheckUser: 'lichunxiao15',
        },
        {
          id: 3230,
          reportId: 'JbI9enl8',
          reportName: 'qlczy 2021-03-19 18:15:55',
          state: '0',
          stateName: '待审核',
          categoryOneId: 15901,
          categoryOneName: '家庭清洁/纸品',
          categoryTwoId: 15903,
          categoryTwoName: '清洁用具',
          categoryThreeId: 15916,
          categoryThreeName: '垃圾桶',
          categoryFourId: -999,
          categoryFourName: null,
          brandId: 28952,
          brandName: null,
          createTime: 1616148955000,
          createTimeString: '2021-03-19 18:15:55',
          createUser: 'zhangyao22',
          createSource: null,
          updateTime: 1616149017000,
          updateTimeString: '',
          submitTime: 1616148923000,
          submitTimeString: '2021-03-19 18:15:23',
          checkUser: 'zhangyao22',
          reportPartition: '2020-08-31',
          reqId: 'R-KxjLaEPZ',
          channel: '1000000',
          channelDesc: '全站',
          source: '1',
          sourceDesc: '分配',
          colorIndex: null,
          skuCount: 11,
          fileUrl:
            'http://storage.jd.com/report-pdf/JbI9enl8-2019%E5%B9%B4%E4%B8%93%E4%B8%9A%E5%BA%8F%E5%88%97%E6%99%8B%E5%8D%87%E8%BF%B0%E8%81%8C-%E5%BC%A0%E5%B0%A7.pdf?Expires=1624789016&AccessKey=XgiAcZPiuspqBeT8&Signature=xxGdJaMubMjrHFUIAJGEtNoK90w%3D',
          followers: 'null,lichunxiao15,yuhongda1,yuhongda1,zhangyao22',
          purchaseCheckState: null,
          purchaseCheckStateDesc: null,
          reportType: 1,
          brandCheckUser: 'lichunxiao15',
        },
        {
          id: 3226,
          reportId: 'poJPDpM5',
          reportName: '全流程测试 2021-03-19 15:44:21',
          state: '1',
          stateName: '已通过',
          categoryOneId: 15901,
          categoryOneName: '家庭清洁/纸品',
          categoryTwoId: 15903,
          categoryTwoName: '清洁用具',
          categoryThreeId: 15916,
          categoryThreeName: '垃圾桶',
          categoryFourId: -999,
          categoryFourName: null,
          brandId: 28952,
          brandName: null,
          createTime: 1616139861000,
          createTimeString: '2021-03-19 15:44:21',
          createUser: 'zhangyao22',
          createSource: null,
          updateTime: 1616140576000,
          updateTimeString: '',
          submitTime: 1616139713000,
          submitTimeString: '2021-03-19 15:41:53',
          checkUser: 'zhangyao22',
          reportPartition: '2020-08-31',
          reqId: 'R-cb3etyIh',
          channel: '1000000',
          channelDesc: '全站',
          source: '2',
          sourceDesc: '领取',
          colorIndex: null,
          skuCount: 1,
          fileUrl:
            'http://storage.jd.com/report-pdf/poJPDpM5-2019%E5%B9%B4%E4%B8%93%E4%B8%9A%E5%BA%8F%E5%88%97%E6%99%8B%E5%8D%87%E8%BF%B0%E8%81%8C-%E5%BC%A0%E5%B0%A7.pdf?Expires=1624780569&AccessKey=XgiAcZPiuspqBeT8&Signature=Yb0baBycsAWlE5%2B8fv%2BIhCrfBsg%3D',
          followers: 'zhangyao22',
          purchaseCheckState: null,
          purchaseCheckStateDesc: null,
          reportType: 1,
          brandCheckUser: 'lichunxiao15',
        },
      ],
      records: 3,
      pageNum: null,
      pageSize: null,
      totalPage: null,
    },
    success: true,
  });

  res.send(ret);
});
module.exports = router;
