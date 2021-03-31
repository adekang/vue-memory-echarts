<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="arrow-left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="formWrapper">
      <FormItem :value="currentTag.name"
                @update:value="update"
                field-name="标签名"
                placeholder="请输入标签名"/>
    </div>
    <div class="buttonWrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem},
})
export default class EditLabel extends Vue {
  // tag 默认是undefined
  get currentTag() {
    return this.$store.state.currentTag;
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    console.log(name);
    if (this.currentTag) {
      this.$store.commit('updateTag', {
        id: this.currentTag.id, name
      });
    }
  }

  remove() {
    this.$store.commit('removeTag', this.currentTag.id);
  }

  goBack() {
    console.log('back');
    this.$router.back();
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

.formWrapper {
  background-color: white;
  margin-top: 8px;
}

.buttonWrapper {
  text-align: center;
  padding: 16px 0;
  margin-top: 44-16px;
}
</style>