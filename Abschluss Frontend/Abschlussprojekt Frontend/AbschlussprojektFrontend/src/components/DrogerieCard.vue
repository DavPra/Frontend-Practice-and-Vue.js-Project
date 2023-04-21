<script setup>
import { useItemStore } from '@/store/ItemStore';
import { ref } from 'vue';
import axios from 'axios';

  const ItemStore = useItemStore();
  const currentDate = ref(new Date().toLocaleDateString())

  function deleteList () {
    const confirmed = confirm('Möchten Sie die Liste wirklich löschen?');
    if (confirmed) {
      axios.delete(`https://codersbay.a-scho-wurscht.at/api/tasklist/${ItemStore.taskID}`)
        .then(response => {
          if (response.status === 204) {
            alert('Die Liste wurde erfolgreich gelöscht.');
            ItemStore.removeItemList(ItemStore.taskID);
          }
        })
        .catch(error => {
          if(response.status === 401) {
            alert('Bitte loggen Sie sich ein um die Listen zu bearbeiten.')
          }
          else if (response.status === 403) {
            alert('Das ist nicht ihre Einkaufsliste.')
          }
          console.error('Error deleting list:', error);
        });
    }
  }
  const formOn = false

  function editList () {

      formOn = true
  


}


</script>



<template>
    <v-card outlined :variant="'tonal'" style="margin:20px" color="pink-darken-2">
      <v-card-title>
        <span class="headline font-weight-bold">Einkaufsliste Drogerie</span> <br>
        <span class="caption">{{ currentDate }}</span>
      </v-card-title>
      <v-card-text>
        <ul style="margin-top: 20px;">
          <li v-for="Items in ItemStore.Items">{{Items.name}}</li>
      </ul> 
      </v-card-text>
      <v-card-actions>
        <v-btn v-show="formOn" @click="editList">Bearbeiten</v-btn>
        <v-btn @click="deleteList">Löschen</v-btn>
      </v-card-actions>
    </v-card>
  </template>

  