<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="arrow-left"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="formWrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="buttonWrapper">
    <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  value = '';

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log('123');
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang='scss' scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {

  }

  > .leftIcon {
    width: 16px;
    height: 16px;
  }

}
.formWrapper{
  background-color: white;
  margin-top: 8px;
}
.buttonWrapper{
  text-align: center;
  padding: 16px 0;
  margin-top: 44-16px;
}
</style>