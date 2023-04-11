<template>
    <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="20" 
                label="Vorname"
                required
              ></v-text-field>
            </v-col>
    
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
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
                :rules="emailRules"
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
                :rules="passwordRules"
                label="Passwort"
                required
              ></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-form>


</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Geben Sie bitte ihren Namen ein.'
        },
        value => {
          if (value?.length <= 20) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'Die Angabe einer Email-Adresse ist erforderlich.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'Bitte geben sie eine gültige Email-Adresse an.'
        },
      ],
      password: '',
      passwordRules: [
        value => {
            if (value) return true

            return 'Bitte geben Sie ein gültiges Passwort ein.'
        },
        //value => {
          //  if ()
        //}

      ]
    }),
  }
</script>