<template>
  <div></div>
</template>
<script setup lang="ts">
  import { LogoutAPI } from '../request/api';
  defineProps<{ msg: string }>();

  //接口请求用法 setup顶层有async，可不加async 但是在函数下还是要加async
  let res = await LogoutAPI();
  console.log(res);
</script>
<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
