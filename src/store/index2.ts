import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  //浅拷贝 直接复制地址
  //record store
  ...recordStore,
  // tag store
  ...tagStore

};

export default store;