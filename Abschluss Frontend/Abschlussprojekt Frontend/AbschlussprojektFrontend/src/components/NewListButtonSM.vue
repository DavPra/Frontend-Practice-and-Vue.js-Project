<script setup>

   import { defineEmits } from 'vue';

   const emit = defineEmits(['newListSM']);

   function newListSM() {
   emit('newListSM');
   }


  </script>
  




<template>
 <v-btn style="margin-left:20px" color="primary" dark @click="newListSM">
    <v-icon icon=mdi-plus size="x-large"></v-icon>
    Neue Liste Supermarkt
   </v-btn>
  </template>
  
