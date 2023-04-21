<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { tokenStore } from '@/store/tokenStore';

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const username = ref('')
const termsOfUseAccepted = ref(false)

const submitForm = async () => {
  if (!termsOfUseAccepted.value) {
    alert('Bitte akzeptieren Sie die AGB um fortzufahren.')
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
  
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    username.value = ''
    password.value = ''
    termsOfUseAccepted.value = false
  } catch (err) {
    if (err.isAxiosError && err.response.status === 400) {
      alert('Ihre Eingaben entsprechen nicht den Eingabekriterien.')
    }
    else if (err.isAxiosError && err.response.status === 409) {
      alert('Für dies Mailadresse existiert bereits ein Account. Bitte verwenden Sie eine andere.')
    }
  }
}
</script>






<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title align="center" class="mb-4">Bitte geben Sie ihre Daten an um einen Account zu erstellen.</v-card-title>
          <v-form @submit.prevent="submitForm">
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="firstName" label="Vorname" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="lastName" label="Nachname" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="email" label="E-mail Adresse" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="password" label="Passwort mindestens 8 Zeichen" type="password" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="username" label="Username" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-checkbox
                    v-model="termsOfUseAccepted"
                    :rules="[v => !!v || 'Sie müssen den AGB zustimmen um fortzufahren!']"
                    label="Ich akzeptiere die AGB."
                    required
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions class="d-flex justify-center">
              <v-btn type="submit" class="mr-4" :disabled="!termsOfUseAccepted">Registrieren</v-btn>

              <router-link to="/login">
                <v-btn>Einloggen</v-btn>
              </router-link>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
