<script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  import axios from 'axios';

  const emit = defineEmits(['closeForm']);
  const title = ref('');
  const description = ref('');
  const assignedUserId = ref(null);
  const status = ref(null);
  const points = ref(null);
  const estimation = ref(null);

  function addTask() {
    const data = {
      title: title.value,
      description: description.value,
      assignedUserId: assignedUserId.value,
      taskListId: null,
      status: status.value,
      points: points.value,
      estimation: estimation.value
    };

    axios.post('https://codersbay.a-scho-wurscht.at/api/task', data)
      .then(response => {
        console.log('Task created:', response.data);
        closeForm();
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
  }

  function closeForm() {
    emit('closeForm');
  }
</script>



<template>
  <v-card height="auto" width="300" title="Neue Aufgabe" style="margin-left: 20px;">
    <v-form @submit.prevent>
      <v-text-field v-model="title" label="Titel" required></v-text-field>
      <v-text-field v-model="description" label="Beschreibung"></v-text-field>
      <v-text-field v-model="assignedUserId" label="Zugewiesener Benutzer"></v-text-field>
      <v-select v-model="status" :items="['To Do', 'In Progress', 'Done']" label="Status"></v-select>
      <v-text-field v-model="points" type="number" label="Punkte"></v-text-field>
      <v-text-field v-model="estimation" type="number" label="Schätzung"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="addTask">Speichern</v-btn>
      <v-btn type="submit" block class="mt-2" @click="closeForm">Abbrechen</v-btn>
    </v-form>
  </v-card>
</template>