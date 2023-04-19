<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
import axios from 'axios';
//import { useTokenStore } from '@/store/tokenStore';

const emit = defineEmits(['closeForm']);
const selectedType = ref('');
const listNumber = ref('');
const title = ref('');
const description = ref('');
//const accessToken = 


function addTask() {
  const config  = {
    Headers:{
      'Authentication': 'Bearer '
    }
  }
  const data = {
    
    label: selectedType.value + ' ' + listNumber.value + ': ' + title.value,
    description: description.value,
  };

  axios.post('https://codersbay.a-scho-wurscht.at/api/task', data, config)
    .then(response => {
      console.log('Task created:', response.data);
      closeForm();
    })
    .catch(error => {
     if (response.status === 401 ) {
      alert('Bitte loggen Sie sich ein um die Listen zu bearbeiten.')
     };
    });
}

function closeForm() {
  emit('closeForm');
}
</script>


<template>
  <v-card height="auto" width="300" :title="selectedType + ' ' + listNumber" style="margin-left: 20px;">
    <v-form @submit.prevent>
      <v-select v-model="selectedType" :items="['Supermarkt', 'Apotheke', 'Drogerie']" label="Listentyp"></v-select>
      <v-text-field v-model="listNumber" label="Listennummer"></v-text-field>
      <v-text-field v-model="title" label="Listenname" required></v-text-field>
      <v-text-field v-model="description" label="Beschreibung"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="addTask">Speichern</v-btn>
      <v-btn type="submit" block class="mt-2" @click="closeForm">Abbrechen</v-btn>
    </v-form>
  </v-card>
</template>


