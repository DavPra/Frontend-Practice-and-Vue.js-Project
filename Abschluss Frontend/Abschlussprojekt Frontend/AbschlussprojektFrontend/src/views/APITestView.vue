
  <script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const username = ref('')
  const termsOfUseAccepted = ref(false)
  
  const submitForm = async () => {
    if (!termsOfUseAccepted.value) {
      alert('You must accept the terms and services to continue')
      return
    }
    const userData = {email: email.value, firstName: firstName.value, lastName: lastName.value, username: username.value, password: password.value, termsOfUseAccepted: termsOfUseAccepted.value }
    try {
      const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/auth/register', userData)
      console.log(response.data)

      
      email.value = ''
      firstName.value = ''
      lastName.value = ''
      username.value = ''
      password.value = ''
      termsOfUseAccepted.value = false
    } catch (error) {
      console.error(error)
    }
  }
  </script>



  <template>
    <div>
      <h1>Registrierung</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="firstName">Vorname:</label>
          <input id="firstName" type="text" v-model="firstName" required>
        </div>
         <div>
          <label for="lastName">Nachname:</label>
          <input id="lastName" type="text" v-model="lastName" required>
        </div>
        <div>
            <label for="username">Username:</label>
            <input id="username" type="text" v-model="username" required>
          </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" type="password" v-model="password" required>
        </div>
        <div>
          <input id="termsOfUseAccepted" type="checkbox" v-model="termsOfUseAccepted" required>
          <label for="termsOfUseAccepted">Ich akzeptiere die AGB</label>
        </div>
        <div>
          <button type="submit">Registrieren</button>
        </div>
      </form>
    </div>
  </template>
  