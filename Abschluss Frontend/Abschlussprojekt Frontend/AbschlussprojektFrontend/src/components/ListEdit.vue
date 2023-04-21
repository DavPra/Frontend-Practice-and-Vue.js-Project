<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useTaskListStore } from '@/store/TaskListStore';
  
  const taskListStore = useTaskListStore();
  const title = ref('');
  
  function addTask() {
    axios.post('https://codersbay.a-scho-wurscht.at/api/task', {
      taskListId: taskListStore.taskListId,
      title: title.value,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  </script>

  
<template>
    <v-form>
      <v-text-field v-model="title" label="Title" required></v-text-field>
      <v-btn @click="addTask" color="primary">Add Task</v-btn>
    </v-form>
</template>
  

  