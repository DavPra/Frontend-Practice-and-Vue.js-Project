
<script setup>
import axios from "axios";
import { useTaskListStore } from "@/store/taskList";
import { ref, getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const store = useTaskListStore();

const dialog = ref(false);
const valid = ref(false);
const label = ref("");
const description = ref("");
const snackbar = ref(false);

const rules = {
  required: (value) => !!value || "Dieses Feld ist erforderlich",
};

function close() {
  dialog.value = false;
  label.value = "";
  description.value = "";
  valid.value = false;
}

function createList() {
  if (instance.proxy.$refs.form.validate()) {
    const token = localStorage.getItem("accessToken");
    const headers = { Authorization: `Bearer ${token}` };
    const data = { label: label.value, description: description.value };
    axios
      .post("https://codersbay.a-scho-wurscht.at/api/tasklist", data, {
        headers,
      })
      .then((response) => {
        console.log(response);
        store.setTaskListId(response.data.id);
        $emit("created");
        dialog.value = false;
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          snackbar.value = true;
        } else {
          console.log(error);
        }
      });
  }
}
</script>
<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Neue Liste erstellen</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="label" label="Label" required></v-text-field>
            <v-text-field
              v-model="description"
              label="Beschreibung"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Abbrechen</v-btn>
          <v-btn color="blue darken-1" text @click="createList"
            >Erstellen</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn color="blue darken-1" dark @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
      Neue Liste Apotheke
    </v-btn>
    <v-snackbar v-model="snackbar" :timeout="3000" color="red">
      Bitte loggen Sie sich ein um eine neue Liste zu erstellen.
    </v-snackbar>
  </div>
</template>