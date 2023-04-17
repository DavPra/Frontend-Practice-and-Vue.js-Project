<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useTokenStore } from '@/store/tokenStore'

const tokenStore = useTokenStore()

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
    <v-form @submit.prevent="submitForm">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstName" 
                label="Vorname"
                required
              ></v-text-field>
            </v-col>
    
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastName"
                label="Nachname"
                required
              ></v-text-field>
            </v-col>
    
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="password"
                label="Passwort mindestens 8 Zeichen"
                required
              ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="username"
              label="Username"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4">
            <v-checkbox
        v-model="termsOfUseAccepted"
        :rules="[v => !!v || 'Sie müssen den AGB zustimmen um fortzufahren!']"
        label="Ich akzeptiere die AGB."
        required
      ></v-checkbox>
          </v-col>
        
          <v-btn type="submit" block class="mt-2">Registrieren</v-btn>

          <v-btn block class="mt-2">
            <router-link to="/login">Login</router-link>
        </v-btn>

          </v-row>
        </v-container>
      </v-form>


</template>