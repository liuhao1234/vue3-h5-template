<template>
  <div @click="handleIncrement">{{ count }}------{{ double }}</div>
  <TodoList></TodoList>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import store from '@/store'
  const homeStore = store.home()
  const { count,double } = storeToRefs(homeStore)
  const { increment } = homeStore
  const handleIncrement = ()=>{
    increment()
  }
</script>

<style>

</style>