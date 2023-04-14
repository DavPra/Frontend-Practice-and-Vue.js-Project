<script setup>

   import { defineEmits } from 'vue';

   const emit = defineEmits(['newListAP']);

   function newListAP() {
   emit('newListAP');
   }


  </script>
  




<template>
 <v-btn style="margin-left:20px" color="primary" dark @click="newListAP">
    <v-icon icon=mdi-plus size="x-large"></v-icon>
    Neue Liste Apotheke
   </v-btn>
  </template>
  
