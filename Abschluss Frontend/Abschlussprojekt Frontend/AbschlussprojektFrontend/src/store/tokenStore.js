import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
    state: () => ({
        token: [],
      }),

})

//token in local storage speichern und dann in store