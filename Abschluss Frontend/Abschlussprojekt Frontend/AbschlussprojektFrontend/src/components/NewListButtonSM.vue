<script setup>
   import { ref } from 'vue';
   import ListForm from './ListForm.vue';
   import { defineEmits } from 'vue';

   const emit = defineEmits(['newListSM','showForm']);

   const showForm = ref(false);

   function newListSM() {
      emit('newListSM');
      emit('showForm')
      showForm.value = true;
   }




  </script>
  




<template>
 <v-btn style="margin-left:20px" color="primary" dark @click="newListSM">
    <v-icon icon=mdi-plus size="x-large"></v-icon>
    Neue Liste Supermarkt
   </v-btn>

   <ListForm v-if="showForm" />
  </template>
  
