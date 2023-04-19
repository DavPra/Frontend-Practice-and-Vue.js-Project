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
          console.error('Error deleting list:', error);
        });
    }
  }

</script>

<template>
  <v-card outlined :variant="'tonal'" style="margin:20px; max-width:auto;" color="green-lighten-1">
    <v-card-title>
      <span class="headline font-weight-bold">Einkaufsliste Apotheke</span> <br>
      <span class="caption">{{ currentDate }}</span>
    </v-card-title>
    <v-card-text>
      <ul style="margin-top: 20px;">
        <li v-for="item in ItemStore.getItemsByList(ItemStore.taskID)" :key="item.id">{{ item.name }}</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn>Bearbeiten</v-btn>
      <v-btn @click="deleteList">Löschen</v-btn>
    </v-card-actions>
  </v-card>
</template>
