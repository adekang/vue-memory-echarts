<template>

  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="arrow-right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag"
              @click="createTag">
        新建标签
      </Button>
    </div>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';

@Component({
  components: {Button},
  computed: {
    tags() {
      return this.$store.state.tagList;
    },
  }
})
export default class Labels extends mixins(TagHelper) {
  created() {
    this.$store.commit('fetchTags');
  }


}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  background-color: #fff;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E6E6E6;

    svg {
      width: 16px;
      height: 16px;
      color: #333333;
      margin-right: 16px;
    }
  }
}

.createTag {
  background-color: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
