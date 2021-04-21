<template>
  <Layout class-prefix="layout">
    <Tags @update:value="record.tags =$event"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                :value.sync="record.notes"
      />
    </div>
    <div class="createdAt">
      <FormItem field-name="日期"
                type="date"
                placeholder="在这里输入日期"
                :value.sync="record.createdAt"
      />
    </div>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>

    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tags from '@/components/money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, Tags, FormItem, NumberPad}
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0, createdAt: new Date().toISOString()
  };

  // created() {
  //   this.$store.commit('fetchRecords');
  // }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.notes = '';
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;

}

.notes {
  padding: 12px 0;
}
</style>

<style lang="scss">
@import "~@/assets/style/helper.scss";
</style>

