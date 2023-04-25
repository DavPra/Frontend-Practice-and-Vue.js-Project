<script setup>
import { ref } from "vue";
import { useTaskListStore } from "@/store/taskList";

const taskListStore = useTaskListStore();
const taskList = ref([]);
const title = ref("");

function fetchListItems() {
    taskListStore.fetchListItems();
    console.log(taskList.value);
    taskList.value = taskListStore.taskList;

}

const submitTask = async () => {

    
};

</script>

<template>
    <v-container>
      <h1>Meine Einkaufsliste</h1>
      <v-form @submit.prevent="submitTask">
        <v-text-field v-model="title" label="Neuer Eintrag"></v-text-field>
        <v-btn color="primary" type="submit">Speichern</v-btn>
      </v-form>
      <v-list>
        <v-list-item
            v-for="item in taskList"
            :key="item.id"
            @click="fetchListItems()"
        >
          <v-list-item-action>
            <v-icon>mdi-delete</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn @click="fetchListItems()">Liste laden</v-btn>
    </v-container>

    
</template>
