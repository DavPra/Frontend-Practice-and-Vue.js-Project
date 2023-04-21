 <script>
 import axios from "axios";
 
 export default {
   data() {
     return {
       dialog: false,
       valid: false,
       label: "",
       description: "",
       rules: {
         required: (value) => !!value || "Dieses Feld ist erforderlich",
       },
       snackbar: false,
     };
   },
   methods: {
     close() {
       this.dialog = false;
       this.label = "";
       this.description = "";
       this.valid = false;
     },
     createList() {
       if (this.$refs.form.validate()) {
         const token = localStorage.getItem("accessToken");
         const headers = { Authorization: `Bearer ${token}` };
         const data = { label: this.label, description: this.description };
         axios
           .post("https://codersbay.a-scho-wurscht.at/api/tasklist", data, { headers })
           .then((response) => {
             console.log(response);
             this.$emit("created");
             this.dialog = false;
           })
           .catch((error) => {
             if (error.response && error.response.status === 401) {
               this.snackbar = true;
             } else {
               console.log(error);
             }
           });
       }
     },
   },
 };
 </script>
 
 
 
 
 <template>
   <div>
     <v-dialog v-model="dialog" max-width="500">
       <v-card>
         <v-card-title class="headline">Neue Liste erstellen</v-card-title>
         <v-card-text>
           <v-form ref="form" v-model="valid">
             <v-text-field
               v-model="label"
               :rules="[rules.required]"
               label="Label"
               required
             ></v-text-field>
             <v-text-field
               v-model="description"
               :rules="[rules.required]"
               label="Beschreibung"
               required
             ></v-text-field>
           </v-form>
         </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="blue darken-1" text @click="close">Abbrechen</v-btn>
           <v-btn color="blue darken-1" text @click="createList">Erstellen</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
     <v-btn color="blue darken-1" dark @click="dialog = true">
       <v-icon>mdi-plus</v-icon>
       Neue Liste Apotheke
     </v-btn>
     <v-snackbar v-model="snackbar" :timeout="3000" color="red">
       Bitte loggen Sie sich ein um eine neue Liste zu erstellen.
     </v-snackbar>
   </div>
 </template>
 

 