import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
  state: () => ({
    token: null,
  }),

  actions: {
    saveToken(token) {
      localStorage.setItem('access_token', token);
      this.token = token;
    }
  }
})
