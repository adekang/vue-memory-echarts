<template>

  <Layout class-prefix="layout">
    {{ record }}
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>

  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

// 数据库升级 数据迁移
const version = window.localStorage.getItem('version') || '0';

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
if (version === '0.0.1') {
  recordList.forEach(record => {
    record.createdAt = new Date(2020, 1, 1);
  });
//  保存数据
  window.localStorage.setItem('recordList', JSON.stringify(recordList));

}
window.localStorage.setItem('version', '0.0.2');
// 声明类型
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date  // 类 / 构造函数
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];

  // 收集相关区域的值
  recordList: Record[] = recordList;
  record: Record = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    //深拷贝
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  //  保存在localStorage
  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}


</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;

}
</style>

<style lang="scss">
@import "~@/assets/style/helper.scss";
</style>

