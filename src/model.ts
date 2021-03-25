const localStorageName = 'recordList';

const model = {
//  获取数据
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];

  },
  //保存数据
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageName, JSON.stringify(data));
  },
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  }

};

export default model;