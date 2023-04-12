<script setup>
import { useItemStore } from '@/store/ItemStore';
import { ref } from 'vue';

const ItemStore = useItemStore();
const currentDate = ref(new Date().toLocaleDateString())


</script>


<template>
    <v-card outlined :variant="'tonal'" style="margin:20px" color="blue-lighten-4">
      <v-card-title>
        <span class="headline font-weight-bold">Einkaufsliste Supermarkt</span> <br>
        <span class="caption">{{ currentDate }}</span>
      </v-card-title>
      <v-card-text>
        "..."
      </v-card-text>
      <v-card-actions>
        <v-btn>Bearbeiten</v-btn>
        <v-btn>Löschen</v-btn>
      </v-card-actions>
    </v-card>
  </template>