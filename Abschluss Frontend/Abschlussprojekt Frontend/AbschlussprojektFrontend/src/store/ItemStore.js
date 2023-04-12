// Utilities
import { defineStore } from 'pinia'

export const useItemStore = defineStore('app', {
  state: () => ({
    Items: [],
  }),
})
