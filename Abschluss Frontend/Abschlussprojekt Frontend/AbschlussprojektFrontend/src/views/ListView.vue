<script setup>
import { ref, onMounted } from "vue";
import { useTaskListStore } from "@/store/taskList";


const taskListStore = useTaskListStore();
const title = ref('');

onMounted (() => {
    fetchListItems();
});


function fetchListItems() {
    taskListStore.fetchListItems();
  
}

function submitTask() {
  console.log(title.value);
  localStorage.setItem('title', title.value);
    taskListStore.createTask();


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
        <v-list-item-action>
          <v-icon>mdi-delete</v-icon>
        </v-list-item-action>
        <v-list-item-title>{{ task.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-btn @click="fetchListItems()">Liste laden</v-btn>
  </v-container>
</template>

