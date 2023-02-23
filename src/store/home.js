import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
  //默认key是home，默认是localstorage存储
  persist: {
    storage: sessionStorage
  }
})