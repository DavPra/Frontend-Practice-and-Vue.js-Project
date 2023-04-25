import { defineStore } from 'pinia'

export const useTokenStore = defineStore({
  id: 'tokenStore',
  state: () => ({
    token: localStorage.getItem('access_token') || null,
    defaultTaskListID: localStorage.getItem('defaultTaskListID') || null,
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('access_token', token)
      this.defaultTaskListID = defaultTaskListID
      localStorage.setItem('defaultTaskListID', defaultTaskListID)
    },
    deleteToken() {
      this.token = null
      localStorage.removeItem('access_token')
    },
  },
})
