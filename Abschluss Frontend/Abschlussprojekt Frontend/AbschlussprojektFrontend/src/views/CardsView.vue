<script setup>
import { onMounted, onUnmounted } from "vue";
import NewListButtonSM from "@/components/NewListButtonSM.vue";
import NewListButtonDR from "@/components/NewListButtonDR.vue";
import NewListButtonAP from "@/components/NewListButtonAP.vue";
import SupermarktCard from "@/components/SupermarktCard.vue";
import DrogerieCard from "@/components/DrogerieCard.vue";
import ApothekeCard from "@/components/ApothekeCard.vue";

const showSupermarkt = false;
const showDrogerie = false;
const showApotheke = false;
const newList = null;

const $on = (event, callback) => {
  window.addEventListener(event, callback);
};
const $off = (event, callback) => {
  window.removeEventListener(event, callback);
};

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

const handleNewListSM = (listId) => {
  showSupermarktCard(listId);
};

const handleDestroy = () => {
  showSupermarkt = false;
  showDrogerie = false;
  showApotheke = false;
  newList = null;
};

defineEmits(["NewListSM"]);

onMounted(() => {
  $on("NewListSM", handleNewListSM);
});

onUnmounted(() => {
  $off("NewListSM", handleNewListSM);
});

</script>

<template>
  <div class="d-flex justify-center mt-5">
    <NewListButtonSM  />
    <div class="mx-5"></div>
    <NewListButtonDR  />
    <div class="mx-5"></div>
    <NewListButtonAP  />
  </div>
  <SupermarktCard v-if="showSupermarkt" :list="newList" @destroy="handleDestroy" />
  <DrogerieCard v-if="showDrogerie" :list="newList" @destroy="handleDestroy" />
  <ApothekeCard v-if="showApotheke" :list="newList" @destroy="handleDestroy" />
</template>
