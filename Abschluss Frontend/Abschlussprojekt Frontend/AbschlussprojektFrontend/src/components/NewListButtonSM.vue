 <script>
 import axios from 'axios';
 
 export default {
   name: 'NewTaskListButton',
   data() {
     return {
       dialog: false,
       label: '',
       description: '',
       valid: false,
       errorMessage: '',
       rules: {
         required: (value) => !!value || 'Feld darf nicht leer sein',
       },
     };
   },
   methods: {
     createList() {
       const token = localStorage.getItem('accessToken');
       if (!token) {
         this.errorMessage = 'Bitte loggen Sie sich ein um eine neue Liste zu erstellen.';
         return;
       }
       const config = {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       };
       axios.post('https://codersbay.a-scho-wurscht.at/api/tasklist', {
         label: this.label,
         description: this.description,
       }, config)
         .then(response => {
           if (response.status === 201) {
             this.dialog = false;
             this.$emit('list-created', response.data);
             this.label = '';
             this.description = '';
             this.errorMessage = '';
             this.valid = false;
           }
         })
         .catch(error => {
           if (error.response.status === 401) {
             this.errorMessage = 'Bitte loggen Sie sich ein um eine neue Liste zu erstellen.';
           } else {
             this.errorMessage = 'Fehler beim Erstellen der Liste.';
           }
         });
     },
   },
 };
 </script>
 
 
 
 <template>
   <div>
     <v-btn color="green darken-1" dark @click="dialog = true">
       <v-icon>mdi-plus</v-icon> Neue Liste Supermarkt
     </v-btn>
     <v-dialog v-model="dialog" max-width="500px">
       <v-card>
         <v-card-title>
           <span class="headline font-weight-bold">Neue Einkaufsliste erstellen</span>
         </v-card-title>
         <v-card-text>
           <v-form ref="form" v-model="valid">
             <v-text-field label="Label" v-model="label" :rules="[rules.required]" required></v-text-field>
             <v-text-field label="Beschreibung" v-model="description"></v-text-field>
           </v-form>
           <v-row>
             <v-col>
               <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
             </v-col>
           </v-row>
         </v-card-text>
         <v-card-actions>
           <v-btn color="primary" @click="createList">Erstellen</v-btn>
           <v-btn color="secondary" @click="dialog = false">Abbrechen</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
   </div>
 </template>
 

 