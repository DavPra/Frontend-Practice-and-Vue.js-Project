<script setup>
import ApothekeCard from './components/ApothekeCard.vue';
import LoginPage from './components/LoginPage.vue';
import SupermarktCard from './components/SupermarktCard.vue';
import TestCard from './components/TestCard.vue';
import DrogerieCard from './components/DrogerieCard.vue';
import NewListbutton from './components/NewListButton.vue';
import TestView from './views/TestView.vue';
import StartPageView from './views/StartPageView.vue';
import ListForm from './components/ListForm.vue';
</script>

<template>
<RouterView/>
<ListForm/>
<ApothekeCard/>



</template>
