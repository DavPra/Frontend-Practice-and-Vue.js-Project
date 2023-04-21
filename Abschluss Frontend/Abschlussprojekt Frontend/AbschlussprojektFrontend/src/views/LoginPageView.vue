<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { tokenStore } from '@/store/tokenStore';

const router = useRouter();
const rules = {
  required: (v) => !!v || 'Required',
  email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
  min8chars: (v) => (v && v.length >= 8) || 'Minimum 8 characters',
};
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

async function login() {
  loading.value = true;
  try {
    const response = await axios.post('/api/login', { email: email.value, password: password.value });
    setToken(response.data.accessToken);
    tokenStore.setToken(response.data.accessToken);
    router.push('/skip');
  } catch (err) {
    if (err.response.status === 400) {
      error.value = 'Es gibt Fehler in der Formatierung ihrer Eingabe bitte versuchen sie es erneut.';
    } else if (err.response.status === 401) {
      error.value = 'Ihre E-Mail Adresse oder ihr Passwort sind nicht korrekt.';
    } else {
      error.value = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
    }
  }
  loading.value = false;
}

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
          <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required, rules.email]"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" :rules="[rules.required, rules.min8chars]"></v-text-field>
          <v-alert v-if="error" type="error" dismissible>{{ error }}</v-alert>
          <v-btn type="submit" color="primary" class="mr-4" :disabled="loading">
            <span v-if="loading">
              <v-progress-circular indeterminate size="24" color="white"></v-progress-circular>
            </span>
            <span v-else>Login</span>
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
