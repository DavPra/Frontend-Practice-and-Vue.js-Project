<script setup>
import { useItemStore } from '@/store/ItemStore';
import { ref } from 'vue';

const ItemStore = useItemStore();
const currentDate = ref(new Date().toLocaleDateString())


</script>



<template>
    <v-card outlined :variant="'tonal'" style="margin:20px" color="pink-lighten-5">
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
        <v-btn>Bearbeiten</v-btn>
        <v-btn>Löschen</v-btn>
      </v-card-actions>
    </v-card>
  </template>

  