<script setup>
  import { ref } from 'vue';
  import { useItemStore } from '@/store/ItemStore';
  import { defineEmits } from 'vue';

  const emit = defineEmits(['closeForm'])

  const ItemStore = useItemStore();
  const itemName = ref('');

  function addItem() {
    ItemStore.Items.push ({
        name: itemName.value
    });
    itemName.value = '';
  }

  function closeForm() {
    emit('closeForm')
    showForm.value = false

  }
</script>

<template>
  <v-card height="auto" width="300" title="Neuer Eintrag" style="margin-left: 20px;">
    <v-form @submit.prevent>
      <v-text-field
        v-model="itemName"
        label="Neuer Eintrag"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="addItem">Speichern</v-btn>
      <v-btn type="submit" block class="mt-2" @click="closeForm">Abbrechen</v-btn>
    </v-form>
    <ul style="margin-top: 20px;">
      <li v-for="Items in ItemStore.Items">{{Items.name}}</li>
    </ul> 
  </v-card>
</template>
