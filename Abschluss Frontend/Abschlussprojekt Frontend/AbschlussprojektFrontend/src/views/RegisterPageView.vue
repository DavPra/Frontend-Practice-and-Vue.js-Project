<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useTokenStore } from '@/store/tokenStore';
import { useRouter } from 'vue-router';

const router = useRouter()

const tokenStore = useTokenStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const username = ref('')
const termsOfUseAccepted = ref(false)

const submitForm = async () => {
  if (!termsOfUseAccepted.value) {
    alert('Please accept the terms of use to continue.')
    return
  }
  const userData = {
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    password: password.value,
    termsOfUseAccepted: termsOfUseAccepted.value
  }
  try {
    const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/auth/register', userData)
    console.log(response.data.accessToken)
    localStorage.setItem('accessToken', response.data.accessToken)
    tokenStore.setToken(response.data.accessToken)
    console.log(password.value)
    localStorage.setItem('defaultListId', response.data.taskListId)
    console.log(response.data.taskListId)
    if (response.status === 200) {
      router.push('/list')
    }

    email.value = ''
    firstName.value = ''
    lastName.value = ''
    username.value = ''
    password.value = ''
    termsOfUseAccepted.value = false
  } catch (err) {
    if (err.isAxiosError && err.response.status === 400) {
      alert('Your inputs do not match the input criteria.')
    }
    else if (err.isAxiosError && err.response.status === 409) {
      alert('An account already exists for this email address. Please use another.')
    }
  }
}
</script>



<template>
  <v-container>
    <v-card>
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="firstName" label="First Name"></v-text-field>
          <v-text-field v-model="lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field v-model="username" label="Username"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-checkbox v-model="termsOfUseAccepted" label="I accept the terms of use"></v-checkbox>
          <v-btn color="primary" type="submit">Register</v-btn>
          <v-btn style="margin-left: 20px;" color="secondary" @click="router.push('/list')">Weiterleitung nach der Registrierung.</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>


