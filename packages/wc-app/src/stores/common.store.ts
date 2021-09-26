import { makeAutoObservable, observable, computed, toJS, flow } from 'mobx';
import { SalesListItem, UserInfo } from '../models';
import { getCurrentUserInfo, getSalesListData } from '../api/common';
import _ from 'lodash';

export default class CommonStore {
  userInfo: UserInfo = null;
  salesListData: Array<SalesListItem> = [];
  total: number | null = 0;
  page = 1;
  pageSize = 10;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentUserInfo = flow(function* (this: CommonStore, params: any) {
    const res = yield getCurrentUserInfo();

    if (res.data && res.data.data) {
      if (res.data.data.authFunction == null) {
        res.data.data.authFunction = [];
      }
    }
    this.userInfo = (res.data && res.data.data) || {};
    return res.data && res.data.data;
  });

  getListData = flow(function* (this: CommonStore, params: any) {
    const res = yield getSalesListData(params);
    this.salesListData = (res.data && res.data.data) || {};
    this.total = (res.data && res.data.total) || 0;
    this.salesListData = _.times(100, i => ({
      id: i,
      keyword: '关键词' + i,
      producttName: '商品名称' + i,
      brandName: '品牌名称' + i,
      jdCate: '京东品类',
      trendIndex: _.random(100),
      commentIndex: _.random(100),
      jdIndex: _.random(100),
      tmIndex: _.random(100),
      createTime: +new Date()
    }));
    return res.data && res.data.data;
  });

  setPage(value) {
    this.page = value;
  }
  setPageSize(value) {
    this.pageSize = value;
  }
}
