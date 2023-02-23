import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { useUserStore } from '@/store/user'
import { useHomeStore } from '@/store/home'
import { useAppStore } from '@/store/app'


export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


export default {
  app: useAppStore,
  user: useUserStore,
  home: useHomeStore
}