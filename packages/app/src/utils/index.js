import { flow } from 'mobx-state-tree';
import { message } from 'antd';
import moment from 'moment';

export const isDev = process.env.NODE_ENV === 'development';
export const jsonClone = (o) => JSON.parse(JSON.stringify(o));
export const appCode = process.env.NODE_ENV === 'development' ? '/' : `${__HOST}`;
export const nameReg = /^[\u4e00-\u9fa50-9a-zA-Z_\(\)]+$/;
export const nameRegWithMiddleLine = /^[\u4e00-\u9fa50-9a-zA-Z_\-\(\)\s\[\]:]+$/;
export function parseCategoryId(categoryId) {
  return categoryId ? categoryId.split(',') : [];
}
export const canEditAuth = (state) => {
  return !['checking', 'pass', 'reject'].includes(state);
};
export const categoryStatus = {
  edit: '编辑中',
  checking: '待验收',
  withdraw: '已撤回',
  pass: '已验收',
  reject: '被驳回',
};
export const passWrap = (fn) => (data) => (data || data === 0 ? fn(data) : data);

const defaultCallback = (data) => data || true;

export const messageLoading = {
  loading: false,
  setLoading: (value) => {
    messageLoading.loading = value;
  },
};
export function flowWrap(api, callback) {
  return flow(function* (params) {
    let closeLoading = null;
    if (!messageLoading.loading) {
      closeLoading = message.loading('正在获取数据...', 0);
      messageLoading.loading = true;
    }
    let result;
    const res = yield api(params);
    if (res.data && res.data.success) {
      result = callback(res.data.data);
    } else {
      result = false;
    }
    if (closeLoading) {
      setTimeout(closeLoading, 0);
      messageLoading.loading = false;
    }
    return result;
  });
}

export function actionFact(apis, actionMap) {
  return Object.keys(actionMap).reduce((result, key) => {
    result[key] = flowWrap(apis[key], actionMap[key] || defaultCallback);
    return result;
  }, {});
}

export const RECOMMEND_MATERIAL_MANAGEMENT = 'NPD.RecommendMaterialManagement';
export const REPORT_ACCEPTANCE = 'NPD.ReportAcceptance';
export const REPORT_DOWNLOAD = 'NPD.ReportDownload';

// 模板共享与推荐到模板库操作
export const TMPL_SHARE_MANAGEMENT = 'NPD.TmplShareManagement';
export const TMPL_SETRECOMMEND_MANAGEMENT = 'NPD.TmplSetRecommendManagement';

// 需求分配与领取按钮
export const DEMAND_RECEIVE_MANAGEMENT = 'NPD.DemandReceiveManagement';
export const DEMAND_DISPATCH_MANAGEMENT = 'NPD.DemandDispatchManagement';
export const DEMAND_SHOW_MANAGEMENT = 'NPD.DemandShowManagement';

// 品类拓展页面展示控制
export const CATEGORY_SHOW_MANAGEMENT = 'NPD.CategoryShowManagement';

// 商品监控
export const GOODS_MONITOR_LIST_MANAGEMENT = 'NPD.GoodsMonitorListManagement';
export const GOODS_FOLLOW_MANAGEMENT = 'NPD.GoodsFollowManagement';

// 我的工作台
export const WORK_MENU_MANAGEMENT = 'NPD.WorkMenuManagement';
// 我的报告
export const MY_REPORT_MENU_MANAGEMENT = 'NPD.MyReportMenuManagement';
// 素材库
export const MATERIAL_MENU_MANAGEMENT = 'NPD.MaterialMenuManagement';
// 模板库
export const TMPL_MENU_MANAGEMENT = 'NPD.TmplMenuManagement';

// 市场趋势
export const MARKET_TREND_MANAGEMENT = 'NPD.MarketTrendManagement';
export const MARKET_FOLLOW_MANAGEMENT = 'NPD.MarketFollowManagement';
// 提数工具 - 提数需求
export const DATAEXTRACTION_REQUIREMENT = 'NPD.DataExtractionRequirement';
// 提数工具 - 提数需求 - SKU包
export const DATAEXTRACTION_REQUIREMENT_SKU = 'NPD.DataExtractionRequirementSku';
// 提数工具 - 新增维度
export const DATAEXTRACTION_DIMENSION = 'NPD.DataExtractionDimension';
// 提数工具 - 历史提数
export const DATAEXTRACTION_HISTORY = 'NPD.DataExtractionHistory';
// 提数工具 - 历史提数 > 列表 > 下载结果
export const DATAEXTRACTION_HITORY_DOWNLOAD = 'NPD.DataExtractionHistoryDownload';

// 我的报告 tab显示
export const REPORT_TAB_MY_REPORT_VISIBLE = 'NPD.ReportTabMyReportVisible';
// 报告草稿 tab显示
export const REPORT_TAB_REPORT_DRAFT_VISIBLE = 'NPD.ReportTabReportDraftVisible';
// 新建报告 按钮显示
export const CREATE_REPORT_BUTTON_VISIBLE = 'NPD.CreateReportButtonVisible';

// 编辑报告页-新建报告页面 按钮显示
export const REPORT_EDIT_CREATE_BUTTON_VISIBLE = 'NPD.ReportEditCreateButtonVisible';
// 编辑报告页-添加目录 按钮显示
export const REPORT_EDIT_ADD_BUTTON_VISIBLE = 'NPD.ReportEditAddButtonVisible';
// 编辑报告页-复制 按钮显示
export const REPORT_EDIT_COPY_BUTTON_VISIBLE = 'NPD.ReportEditCopyButtonVisible';
// 编辑报告页-编辑 按钮显示
export const REPORT_EDIT_EDIT_BUTTON_VISIBLE = 'NPD.ReportEditEditButtonVisible';
// 编辑报告页-删除 按钮显示
export const REPORT_EDIT_DELETE_BUTTON_VISIBLE = 'NPD.ReportEditDeleteButtonVisible';

// 洞察数据修正-左菜单显示
export const BASE_DATA_MENU_VISIBLE = 'NPD.BaseDataMenuVisible';
// 洞察数据修正-更新报告 按钮显示
export const BASE_DATA_UPDATE_BUTTON_VISIBLE = 'NPD.BaseDataMenuUpdateButtonVisible';
// 洞察数据修正-下载与上传 按钮显示
export const BASE_DATA_DOWN_UPLOAD_BUTTON_VISIBLE = 'NPD.BaseDataMenuDownUploadButtonVisible';
// 异常SQL记录
export const DEBUG_PAGE_MENU_MANAGEMENT = 'NPD.DebugPageMenuManagement';

// 新品追踪
export const NEW_PRODUCT_TRACKING = 'NPD.NewProductTracking';
export const NEW_PRODUCT_TRACKING_DELETE_BUTTON = 'NPD.NewProductTrackingDeleteButton';
export const NEW_PRODUCT_TRACKING_CALCSTARTTIME = 'NPD.NewProductTrackingCalcStartTime';
export const xuqiubohui = 'NPD.xuqiubohui';

// 数据量降级
export const DATA_DOWNGRADE = 'NPD.DataDowngrade';

// 属性归一
export const ATTR_NORMALIZATION = 'NPD.AttrNormalization';

// POP融合
export const POP_INFO_SHOW = 'NPD.PopInfoShow';

// 机会热力图
export const HEAT_MAP = 'NPD.HeatMap';

/**
 * 格式化埋点参数
 * @param {*} params 埋点参数
 * log(
      ...formatParams({
          funcPath: '5',
          selectedItem: record.orderId
      })
    );
 */
export function formatParams(params) {
  if (!params.appId) {
    if (window.location.host.includes('erp')) {
      // erp
      params.appId = 'c2m_open_1578630469684';
    } else {
      // passport
      params.appId = 'c2m_open_passport_1578988616005';
    }
  }

  const sortedParams = {
    appId: params.appId,
    funcPath: params.funcPath,
    selectedItem: params.selectedItem,
  };

  const obj = sortedParams;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key] && params[key] != '-') {
      obj[key] = params[key];
    } else {
      obj[key] = '-';
    }
  }

  return Object.values(obj);
}
export const APP_ID_ATTR_NORMALIZATION = 'c2m_open_attr_1612505416593';

export function objectTrim(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key].toString().trim();
    } else {
      result[key] = '';
    }
  }
  return result;
}

// DateFormat("yyyy-MM-dd hh:mm:ss");
export function DateFormat(fmt) {
  const date = new Date();
  const o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (const k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  return fmt;
}

// 定时执行；比如滚动页面时每隔 t 毫秒执行一次 scroll 事件方法，防止重复执行
export const easyTimedExecution = (f, t) => {
  let lastTime = 0;
  let timer = null;

  return () => {
    const nowTime = +new Date();
    timer && clearTimeout(timer);
    if (nowTime - lastTime > t) {
      lastTime = nowTime;
      f();
    } else {
      timer = setTimeout(() => {
        f();
      }, t);
    }
  };
};

// 底层数据计算（每月12-14日）
export const isDataWIP = moment().date() >= 12 && moment().date() <= 14;
export const DataWIPMessage = '每月12-14日不可用';
