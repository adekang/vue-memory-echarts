<template>
  <div>
    {{ value }}
    <label class="notes">
      <span class="name">备注</span>
      <input type="text"
             v-model="value"
             placeholder="请输入...">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Notes extends Vue {
  value = '';
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #ccc;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>