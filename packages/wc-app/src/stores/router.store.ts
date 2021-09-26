import { makeAutoObservable, observable, computed, toJS, flow } from 'mobx';
import { SalesListItem, UserInfo } from '../models';
import { getCurrentUserInfo, getSalesListData } from '../api/common';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import URL from 'url';

let instance = null;

export class Router extends RouterStore {
  userInfo: UserInfo = null;
  salesListData: Array<SalesListItem> = [];
  total: number | null = 0;
  page = 1;
  pageSize = 10;

  constructor() {
    super();
    if (instance) return instance;

    const appHistory = createBrowserHistory();
    syncHistoryWithStore(appHistory, this);
    instance = this;
  }
  // URL参数获取 router.query.search
  @computed get query() {
    const { search } = this.location;
    return search ? URL.parse(search, true).query : {};
  }
}

export default new Router();
