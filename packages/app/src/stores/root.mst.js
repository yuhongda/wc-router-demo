import { types } from 'mobx-state-tree';
import CommonStore from '@/stores/common.mst';
import RouterStoreInstance from '@/stores/router.store';

const RootStore = types
  .model('RootStore', {
    common: types.optional(CommonStore, {}),
  })
  .volatile((self) => ({
    router: RouterStoreInstance,
  }));

export default RootStore.create({});
