<template>
        <v-container>
            <v-row
              align="center"
              no-gutters
              style="height:750px"
              
              >
    
    
        <v-col align-self="center">
            <v-sheet class="pa-10 ma-10">
         
       
        <v-card 
        style="width: fit-content;"
        title="Login" 
        text="Melden Sie sich mit E-Mail Adresse und Passwort an."
        variant="tonal">
            <v-card-actions>
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-Mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Passwort"
                required
              ></v-text-field>
    
                <v-btn
                @click=""
                >
                Login
                </v-btn>
            
            </v-card-actions>
    
        </v-card>
    
       </v-sheet>
          </v-col>
    
            </v-row>
    
        </v-container>
       

</template>


<script setup>



</script>