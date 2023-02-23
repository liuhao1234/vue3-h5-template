<template>
  <div class="container">
    <van-empty image="error" description="描述文字" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleBack = ()=>{
  router.back()
}
</script>

<style lang="scss" scoped>
.container{
  height: calc(100% - 60px);
  @include flex-content;
}
</style>