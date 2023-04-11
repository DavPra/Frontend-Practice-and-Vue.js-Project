<template>
    <v-card outlined :variant="'tonal'" style="margin:20px, max-width:auto">
      <v-card-title>
        <span class="headline font-weight-bold">Einkaufsliste Drogerie</span> <br>
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
  
  <script>
  export default {
    data() {
      return {
        currentDate: new Date().toLocaleDateString(),
      };
    },
  };
  </script>
  