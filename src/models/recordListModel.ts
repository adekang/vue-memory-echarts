import clone from '@/lib/clone';

const localStorageName = 'recordListModel';

const recordListModel = {
  data: [] as RecordItem[],
  create(record:RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
  },
//  获取数据
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.data;
  },
  //保存数据
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  }

};

export default recordListModel;