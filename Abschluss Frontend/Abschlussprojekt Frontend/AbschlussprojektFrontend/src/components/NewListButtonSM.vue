NewListButtonSM

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useTaskListStore } from "@/store/taskList";

const taskListStore = useTaskListStore();

const dialog = ref(false);
const label = ref("");
const description = ref("");
const valid = ref(false);
const errorMessage = ref("");

const requiredRule = (value) => !!value || "Feld darf nicht leer sein";

async function createList() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    errorMessage.value =
      "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
    return;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      "https://codersbay.a-scho-wurscht.at/api/tasklist",
      {
        label: label.value,
        description: description.value,
      },
      config
    );
    if (response.status === 201) {
      dialog.value = false;
      taskListStore.setTaskListId(response.data.taskListId);
      label.value = "";
      description.value = "";
      errorMessage.value = "";
      valid.value = false;
    }
  } catch (error) {
    if (error.response.status === 401) {
      errorMessage.value =
        "Bitte loggen Sie sich ein um eine neue Liste zu erstellen.";
    } else {
      errorMessage.value = "Fehler beim Erstellen der Liste.";
    }
  }
}
</script>

<template>
  <div>
    <v-btn color="green darken-1" dark @click="dialog = true">
      <v-icon>mdi-plus</v-icon> Neue Liste Supermarkt
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold"
            >Neue Einkaufsliste erstellen</span
          >
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Label"
              v-model="label"
              required
            ></v-text-field>
            <v-text-field
              label="Beschreibung"
              v-model="description"
            ></v-text-field>
          </v-form>
          <v-row>
            <v-col>
              <p v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="createList">Erstellen</v-btn>
          <v-btn color="secondary" @click="dialog = false">Abbrechen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>