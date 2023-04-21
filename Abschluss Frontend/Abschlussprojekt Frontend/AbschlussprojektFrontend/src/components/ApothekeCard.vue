<script setup>
  import { useTaskListStore } from '@/store/taskList'
  import { ref } from 'vue';
  import axios from 'axios';
  import ListEdit from '@/components/ListEdit.vue';
  import { useTokenStore } from '@/store/tokenStore';

  const taskListStore = useTaskListStore();
  const currentDate = ref(new Date().toLocaleDateString());
  const config = ref({});
  const tokenStore = useTokenStore()

  function deleteList() {
    config.value.headers = { 'Authorization': `Bearer ${tokenStore.getToken}` };
    const confirmed = confirm('Möchten Sie die Liste wirklich löschen?');
    if (confirmed) {
      axios.delete(`https://codersbay.a-scho-wurscht.at/api/tasklist/${taskListStore.taskListId}`, config.value)
        .then(response => {
          if (response.status === 204) {
            alert('Die Liste wurde erfolgreich gelöscht.');
            taskListStore.clearTaskListId();
          }
        })
        .catch(error => {
          if (response.status === 401) {
            alert('Bitte loggen Sie sich ein um die Listen zu bearbeiten.');
          } else if (response.status === 403) {
            alert('Das ist nicht ihre Einkaufsliste.');
          }
          console.error('Error deleting list:', error);
        });
    }
  }

  function editList() {
    const listEditComponent = createApp(ListEdit);
    listEditComponent.mount(document.body.appendChild(document.createElement('div')));
  }
</script>

<template>
  <v-card outlined :variant="'tonal'" style="margin:20px; max-width:auto;" color="green-darken-1">
    <v-card-title>
      <span class="headline font-weight-bold">Einkaufsliste Apotheke</span> <br>
      <span class="caption">{{ currentDate }}</span>
    </v-card-title>
    <v-card-text>
      <ul style="margin-top: 20px;">
        <li v-for="item in ItemStore.getItemsByList(taskListStore.taskListId)" :key="item.id">{{ item.name }}</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="editList">Bearbeiten</v-btn>
      <v-btn @click="deleteList">Löschen</v-btn>
    </v-card-actions>
  </v-card>
</template>
