<template>

  <Layout class-prefix="layout">
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
import model from '@/model';


const recordList = model.fetch();


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];

  // 收集相关区域的值
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
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
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  //  保存在localStorage
  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);
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

