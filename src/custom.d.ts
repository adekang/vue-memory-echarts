// 全局声明类型
type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  createdAt?: string  // 类 / 构造函数

}
// 声明数据类型
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}


type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag,
  createRecordError: Error | null,
  createTagError: Error | null,
}
