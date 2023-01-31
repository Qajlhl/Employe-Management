<template>
  <a-breadcrumb class="container-breadcrumb">
    <a-breadcrumb-item>
      <icon-apps />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in items" :key="item">
      {{ $t(item) }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

//处理面包屑
let items = reactive<string[]>([]);
let route = useRoute();
watch(route , ()=>{

  items.length = 0;//实现响应式
  let locale:string = route.meta.locale as string;

  //一级xx.xx 
  //二级信息xx.xx.info
  items.push(locale.slice(0,locale.lastIndexOf('.')));
  items.push(locale);
   console.log(locale);
},
{
  immediate:true, //刷新页面 立即执行handler函数
}
);
</script>

<style scoped lang="less">
.container-breadcrumb {
  margin: 16px 0;
  :deep(.arco-breadcrumb-item) {
    color: rgb(var(--gray-6));
    &:last-child {
      color: rgb(var(--gray-8));
    }
  }
}
</style>
