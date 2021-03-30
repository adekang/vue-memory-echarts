const localStorageName = 'recordListModel';

const recordListModel = {
  data: [] as RecordItem[],
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