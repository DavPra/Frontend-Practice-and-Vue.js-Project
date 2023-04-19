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
    title="Willkommen zu ShopList" 
    text="Bitte loggen Sie sich ein oder registrieren Sie sich um ihre Einkaufslisten zu verwenden."
    variant="tonal">
        <v-card-actions>
            <v-btn>
                <router-link to="/login">Login</router-link>
            </v-btn>
            <v-btn>
               <router-link to="/register">Registrieren</router-link>  </v-btn>
               <v-btn>
                <router-link to="/skip">Skip</router-link>  </v-btn>
        </v-card-actions>

    </v-card>

   </v-sheet>
      </v-col>

        </v-row>

    </v-container>
   



</template>