
<template>
  <router-view></router-view>
  <div class="loading-wrapper" v-show="loading">
    <van-loading color="#fff">加载中...</van-loading>
  </div>
  
</template>
<script setup>
import { storeToRefs } from 'pinia'
import store from "@/store"
const appStore = store.app()
const { loading } = storeToRefs(appStore)
</script>
<style lang="scss" scoped>
.loading-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
