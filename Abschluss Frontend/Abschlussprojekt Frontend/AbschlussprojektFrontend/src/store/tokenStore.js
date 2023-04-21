import { defineStore } from 'pinia'

export const useTokenStore = defineStore({
  state: () => ({
    token: localStorage.getItem('access_token') || null,
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('access_token', token)
    },
    deleteToken() {
      this.token = null
      localStorage.removeItem('access_token')
    },
  },
})
