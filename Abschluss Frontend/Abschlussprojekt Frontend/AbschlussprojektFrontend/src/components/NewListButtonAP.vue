 <script setup>
   import axios from 'axios';
   import { ref } from 'vue';
 
   const title = 'Create TaskList';
   const dialog = ref(false);
   const label = ref('');
   const description = ref('');
   const errorMessage = ref('');
 
   function createTaskList() {
     axios.post('https://codersbay.a-scho-wurscht.at/api/tasklist', { label: label.value, description: description.value }, {
         headers: {
           'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
         }
       })
       .then(response => {
         if (response.status === 201) {
           alert('TaskList created successfully');
           dialog.value = false;
         }
       })
       .catch(error => {
         if (error.response && error.response.status === 401) {
           errorMessage.value = 'Bitte loggen Sie sich ein um eine neue Liste zu erstellen.';
         } else {
           console.error('Error creating tasklist:', error);
         }
       });
   }
 </script>
 
 
 
 
 <template>
   <div>
     <v-dialog v-model="dialog" max-width="500px">
       <v-card>
         <v-card-title class="headline">{{ title }}</v-card-title>
         <v-card-text>
           <v-form @submit.prevent="createTaskList">
             <v-text-field label="Label" v-model="label" required></v-text-field>
             <v-text-field label="Description" v-model="description"></v-text-field>
             <v-alert
               v-if="errorMessage"
               type="error"
               :value="true"
             >
               {{ errorMessage }}
             </v-alert>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="primary" type="submit">Create</v-btn>
               <v-btn color="secondary" @click="dialog = false">Cancel</v-btn>
             </v-card-actions>
           </v-form>
         </v-card-text>
       </v-card>
     </v-dialog>
     <v-btn color="primary" @click="dialog = true">Create New TaskList</v-btn>
   </div>
 </template>
 

 