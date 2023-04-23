<script setup>
import { ref } from "vue";
import { useTaskListStore } from "@/store/taskList";

const taskListStore = useTaskListStore();
const taskList = ref([]);
const answers = ref(String);

function fetchListItems() {
    taskListStore.fetchListItems();
    taskList.value = taskListStore.listItems;
    console.log(taskList.value);
    answers.value = taskListStore.answer

}

</script>

<template>
    <v-container>
      <h1>My List</h1>
      <v-list>
        <v-list-item
          v-for="item in taskList"
          :key="item.id"
          :title="item.name"
          :subtitle="item.description"
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
    </v-container>

    <v-btn @click="fetchListItems()">Fetch List Items</v-btn>
    <div>Liste ist: {{ answers.value }}</div>
</template>
