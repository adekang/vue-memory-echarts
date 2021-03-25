const localStorageName = 'tagList';

//声明数据类型
type  Tag = {
  id: string
  name: string
}
type  TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
//  获取数据
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  //保存数据
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    }

    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  }
};

export default tagListModel;