import { makeAutoObservable, observable, computed, toJS } from 'mobx';
import CommonStore from './common.store';
import RouterStoreInstance from './router.store';

export class RootStore {
  common = new CommonStore();
  router = RouterStoreInstance;

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
