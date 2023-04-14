<script setup>

   import { defineEmits } from 'vue';

   const emit = defineEmits(['newListDR']);

   function newListDR() {
   emit('newListDR');
   }


  </script>
  




<template>
 <v-btn style="margin-left:20px" color="primary" dark @click="newListDR">
    <v-icon icon=mdi-plus size="x-large"></v-icon>
    Neue Liste Drogerie
   </v-btn>
  </template>
  
