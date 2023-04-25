import { defineStore } from 'pinia'
import axios from 'axios'

const token = localStorage.getItem('accessToken')

export const useTokenStore = defineStore( 'tokenStore', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    
    async login(loginData) {
        const loginConfig = {
          email: loginData.email,
          password: loginData.password,
  };
  const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/auth/login', loginConfig);
  this.token = response.data.accessToken;
  window.localStorage.setItem('accessToken', this.token);
},

async userData() {
  const config = {
    headers: {Authorization: 'Bearer'+ token}};

    const userResponse= await axios.get('https://codersbay.a-scho-wurscht.at/api/auth/', config);
    this.user = userResponse.data.user
    console.log(this.user)}


  }}




)
