<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useTokenStore } from '@/store/tokenStore';
import { ref } from 'vue';

const router = useRouter();
//const email = ref('');
//const password = ref('');
const error = ref('');
//const loading = ref(false);
const tokenStore = useTokenStore();
const loginData = ref({
  email: '', // 'why@is.at',
  password: ''// '12345678',
});


async function login(){
  try{
    await tokenStore.login(loginData.value)
    router.push('/list')
    console.log('login')
    }
    catch (err) {
    if (err.response && err.response.status === 400) {
      error.value = 'Es gibt Fehler in der Formatierung ihrer Eingabe bitte versuchen sie es erneut.';
    } else if (err.response && err.response.status === 401) {
     error.value = 'Ihre E-Mail Adresse oder ihr Passwort sind nicht korrekt.';
    } else {
     error.value = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
    }

    }

  }


  //try {
    //const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/auth/login', loginData.value );
    //console.log(email.value)
    //console.log(password.value)
    //localStorage.setItem('accessToken', response.data.accessToken)
    //tokenStore.setToken(response.data.accessToken)
    //console.log(response.data);
    //localStorage.setItem('defaultListId', response.data.taskListId)
    //console.log(response.data.taskListId)

    //if (response.status === 200) {
      //router.push('/list');
    //}

    //email.value = '';
    //password.value = '';
  //} catch (err) {
    //if (err.response && err.response.status === 400) {
     // error.value = 'Es gibt Fehler in der Formatierung ihrer Eingabe bitte versuchen sie es erneut.';
    //} else if (err.response && err.response.status === 401) {
     // error.value = 'Ihre E-Mail Adresse oder ihr Passwort sind nicht korrekt.';
    //} else {
     // error.value = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
    //}
  //}
  //loading.value = false;
//}


function register() {
  router.push('/register');
}
</script>



<template>
  <v-container>
    <v-card class="mx-auto mt-12" max-width="500" outlined>
      <v-card-title class="text-center">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="loginData.email" label="Email" type="email"></v-text-field>
          <v-text-field v-model="loginData.password" label="Password" type="password"></v-text-field>
          <v-alert v-if="error" type="error" dismissible>{{ error }}</v-alert>
          <v-btn type="submit" color="primary" class="mr-4">
            <span>Login</span>
          </v-btn>
          <v-btn @click="register" color="secondary">Register</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>



<style scoped>
  .v-progress-circular {
    width: 24px !important;
    height: 24px !important;
  }
</style>
