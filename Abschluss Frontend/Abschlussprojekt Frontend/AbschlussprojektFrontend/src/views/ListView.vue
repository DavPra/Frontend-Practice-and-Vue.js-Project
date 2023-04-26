<script setup>
import { ref, onBeforeMount } from "vue";
import { useTaskListStore } from "@/store/taskList";
import axios from "axios";


const taskListStore = useTaskListStore();
const title = ref('');
const error = ref('');
const deleteId = ref('');

onBeforeMount (() => {
    fetchListItems();
});


function fetchListItems() {
    taskListStore.fetchListItems();
  
}

async function submitTask() {

  const token = localStorage.getItem('accessToken');
  if (!token) {
     errorMessage.value =
       "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
      return;
  }
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const body = {
    "assignedUserId": 1475,
    "description": "string",
    "taskListId": 3373,
    "status": "TODO",
    "points": 0,
    "estimation": 0,
    "title": title.value,
  };

  try {
    const response = await axios.post('https://codersbay.a-scho-wurscht.at/api/task', body, config);
    if (response.status === 201) {
      this.answer = response.data;
      console.log(response);
      localStorage.setItem(title.value + 'ID', response.data.taskId);
      console.log(localStorage.getItem(title.value + 'ID'));
    } else if (response.status === 401) {
      console.error('Fehler beim Erstellen der Aufgabe. Loggen Sie sich ein.');
    }
  } catch (error) {
    console.log(error);
  }

}

async function deleteTask() {
  const token = localStorage.getItem('accessToken');
  if (!token) {
     errorMessage.value =
       "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
      return;
  }
  const config = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const response = await axios.delete('https://codersbay.a-scho-wurscht.at/api/task/' + deleteId.value, config);
    console.log(deleteId.value);
    if (response.status === 204) {
      alert('Eintrag gelöscht');
      //this.answer = response.data;
      console.log(response);
    } else if (response.status === 401) {
      console.error('Fehler beim Löschen der Aufgabe. Loggen Sie sich ein.');
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <v-container>
    <h1>Meine Einkaufsliste</h1>
    <v-form @submit.prevent="submitTask">
      <v-text-field v-model="title" label="Neuer Eintrag"></v-text-field>
      <v-btn color="primary" type="submit">Speichern</v-btn>
    </v-form>
    <v-list>
      <v-list-item v-for="task in taskListStore.tasks" :key="task.Id">
        <v-list-item-title>{{ task.title }}</v-list-item-title>
        <v-list-subheader>{{ task.taskId }}</v-list-subheader>
      </v-list-item>
    </v-list>
    <v-form @submit.prevent="deleteTask">
      <v-text-field v-model="deleteId" type="text" label="Geben Sie bitte die Id des zu löschenden Eintrags ein."></v-text-field>
      <v-btn color="primary" type="submit">Löschen</v-btn>
    </v-form>
  </v-container>
</template>

