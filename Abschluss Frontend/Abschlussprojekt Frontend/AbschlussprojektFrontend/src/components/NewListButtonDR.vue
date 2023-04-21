 <script>
 import axios from 'axios';
 
 export default {
   data() {
     return {
       dialog: false,
       label: '',
       description: '',
       errorMsg: '',
     };
   },
   methods: {
     async createList() {
       try {
         const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/tasklist', {
           label: this.label,
           description: this.description,
         }, {
           headers: {
             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
           },
         });
         this.dialog = false;
         this.label = '';
         this.description = '';
         this.errorMsg = '';
         console.log(response.data);
       } catch (error) {
         if (error.response && error.response.status === 401) {
           this.errorMsg = 'Bitte loggen Sie sich ein um eine neue Liste zu erstellen.';
         } else {
           console.error(error);
         }
       }
     },
   },
 };
 </script>
 
 
 
 <template>
   <v-btn color="primary" dark @click="dialog = true">+ Neue Liste Drogerie</v-btn>
   <v-dialog v-model="dialog" max-width="500px">
     <v-card>
       <v-card-title>
         <span class="headline">Neue Einkaufsliste erstellen</span>
       </v-card-title>
       <v-card-text>
         <v-form @submit.prevent="createList">
           <v-text-field v-model="label" label="Label" required></v-text-field>
           <v-text-field v-model="description" label="Beschreibung"></v-text-field>
           <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
           <v-card-actions>
             <v-btn color="error" text @click="dialog = false">Abbrechen</v-btn>
             <v-btn type="submit" color="primary">Erstellen</v-btn>
           </v-card-actions>
         </v-form>
       </v-card-text>
     </v-card>
   </v-dialog>
 </template>
 

 