<script setup>
import ApothekeCard from '@/components/ApothekeCard.vue';
import DrogerieCard from '@/components/DrogerieCard.vue';
import SupermarktCard from '@/components/SupermarktCard.vue';

import NewListButtonAP from '@/components/NewListButtonAP.vue';
import NewListButtonDR from '@/components/NewListButtonDR.vue';
import NewListButtonSM from '@/components/NewListButtonSM.vue';

import { ref } from 'vue';
//import axios from 'axios';

const numberOfSMCards = ref(0);
const numberOfDRCards = ref(0);
const numberOfAPCards = ref(0);

function addSMCard() {
  numberOfSMCards.value++;
}

function addDRCards() {
  numberOfDRCards.value++;
}

function addAPCard() {
  numberOfAPCards.value++;
}


//axios.get("https://codersbay.a-scho-wurscht.at/api/auth")

</script>


<template>
    <div class="card-container">
        
        <v-container>
          <div class="card" v-for="i in numberOfSMCards" :key="i">
            <SupermarktCard/>
          </div>
          <NewListButtonSM @newListSM="addSMCard" />
        </v-container>
        <v-container class="pa-4">
          <div v-for="i in numberOfDRCards" :key="i">
            <DrogerieCard/>
          </div>
          <NewListButtonDR @newListDR="addDRCards" />
        </v-container>
        <v-container class="pa-4">
          <div v-for="i in numberOfAPCards" :key="i">
            <ApothekeCard/>
          </div>
          <NewListButtonAP @newListAP="addAPCard" />
        </v-container>
      </div>
  </template>

<style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 400px;
    margin: 10px;
  }


</style>