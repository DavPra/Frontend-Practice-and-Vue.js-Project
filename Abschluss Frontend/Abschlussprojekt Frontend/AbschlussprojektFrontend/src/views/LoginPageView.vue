<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useTokenStore } from '@/store/tokenStore';

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  const userData = { email: email.value, password: password.value }
  try {
    const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/auth/login', userData)
    console.log(response.data.accessToken)} 

  catch (err) {
    if (err.isAxiosError && err.response.status === 400) {
      alert('Ihre E-Mail Adresse hat kein korrektes Format oder ihr Passwort ist kürzer als 8 Zeichen.')
    }
    else if (err.isAxiosError && err.response.status === 409) {
      alert('E-Mail Adresse oder Passwort sind nicht korrekt. Bitte überprüfen sie ihre Eingaben.')
    }
    console.error(error)
     
  }
}
</script>


<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field label="E-Mail" v-model="email" required></v-text-field>
              <v-text-field label="Passwort" v-model="password" type="password" required></v-text-field>
              <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
              <v-btn type="submit" color="primary" block>Login</v-btn>
              <v-btn style="margin-top: 20px;" color="primary" block>
                <router-link to="/register">Registrieren</router-link>
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


