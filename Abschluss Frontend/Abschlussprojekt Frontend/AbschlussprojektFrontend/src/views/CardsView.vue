<script setup>
import NewListButtonSM from "@/components/NewListButtonSM.vue";
import NewListButtonDR from "@/components/NewListButtonDR.vue";
import NewListButtonAP from "@/components/NewListButtonAP.vue";
import SupermarktCard from "@/components/SupermarktCard.vue";
import DrogerieCard from "@/components/DrogerieCard.vue";
import ApothekeCard from "@/components/ApothekeCard.vue";

let showSupermarkt = false;
let showDrogerie = false;
let showApotheke = false;
let newList = null;

const showSupermarktCard = (list) => {
  showSupermarkt = true;
  showDrogerie = false;
  showApotheke = false;
  newList = list;
};

const showDrogerieCard = (list) => {
  showSupermarkt = false;
  showDrogerie = true;
  showApotheke = false;
  newList = list;
};

const showApothekeCard = (list) => {
  showSupermarkt = false;
  showDrogerie = false;
  showApotheke = true;
  newList = list;
};
</script>



<template>
  <div class="d-flex justify-center mt-5">
    <NewListButtonSM @list-created="showSupermarktCard" />
    <div class="mx-5"></div>
    <NewListButtonDR @list-created="showDrogerieCard" />
    <div class="mx-5"></div>
    <NewListButtonAP @list-created="showApothekeCard" />
  </div>
  <SupermarktCard v-if="showSupermarkt" :list="newList" />
  <DrogerieCard v-if="showDrogerie" :list="newList" />
  <ApothekeCard v-if="showApotheke" :list="newList" />
</template>