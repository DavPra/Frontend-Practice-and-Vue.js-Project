<script setup>
import axios from "axios";
import { useTaskListStore } from "@/store/taskList";
import { ref } from "vue";

const tasklistStore = useTaskListStore();
const dialog = ref(false);
const label = ref("");
const description = ref("");
const errorMsg = ref("");

const createList = async () => {
  try {
    const response = await axios.post(
      "https://codersbay.a-scho-wurscht.at/api/tasklist",
      {
        label: label.value,
        description: description.value,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    tasklistStore.addTasklist(
      response.data.id,
      response.data.label,
      response.data.description
    );
    dialog.value = false;
    label.value = "";
    description.value = "";
    errorMsg.value = "";
    console.log(response.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorMsg.value =
        "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
    } else {
      console.error(error);
    }
  }
};
</script>

<template>
  <v-btn color="primary" dark @click="dialog = true"
    >+ Neue Liste Drogerie</v-btn
  >
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Neue Einkaufsliste erstellen</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createList">
          <v-text-field v-model="label" label="Label" required></v-text-field>
          <v-text-field
            v-model="description"
            label="Beschreibung"
          ></v-text-field>
          <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>
          <v-card-actions>
            <v-btn color="error" text @click="dialog = false">Abbrechen</v-btn>
            <v-btn type="submit" color="primary">Erstellen</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>