<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o"><router-link to="index">首页</router-link></van-tabbar-item>
    <van-tabbar-item icon="search"><router-link to="user">我的</router-link></van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
  import { ref } from 'vue'
  const active = ref(0);
</script>

<style lang="scss" scoped>
.menu-container{
  a{
    font-size: 16px;
  }
}
</style>