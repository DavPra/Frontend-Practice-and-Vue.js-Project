<script setup>
import ApothekeCard from '@/components/ApothekeCard.vue';
import DrogerieCard from '@/components/DrogerieCard.vue';
import SupermarktCard from '@/components/SupermarktCard.vue';

import NewListButtonAP from '@/components/NewListButtonAP.vue';
import NewListButtonDR from '@/components/NewListButtonDR.vue';
import NewListButtonSM from '@/components/NewListButtonSM.vue';

import { ref } from 'vue';

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

</script>




<template>
  <v-container>
    <div class="card-container">
      <v-card v-for="i in numberOfSMCards" :key="i" class="pa-4 ma-4" >
        <SupermarktCard/>
      </v-card>
      <NewListButtonSM @newListSM="addSMCard" />
    </div>
    <div class="card-container">
      <v-card v-for="i in numberOfDRCards" :key="i" class="pa-4 ma-4" >
        <DrogerieCard/>
      </v-card>
      <NewListButtonDR @newListDR="addDRCards" />
    </div>
    <div class="card-container">
      <v-card v-for="i in numberOfAPCards" :key="i" class="pa-4 ma-4" >
        <ApothekeCard/>
      </v-card>
      <NewListButtonAP @newListAP="addAPCard" />
    </div>
  </v-container>
</template>



<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.v-card {
  width: 400px;
  margin: 10px;
}

@media (max-width: 599px) {
  .v-card {
    width: 100%;
    margin: 10px 0;
  }
}

</style>
