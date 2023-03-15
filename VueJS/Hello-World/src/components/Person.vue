<script setup>
import { ref } from 'vue';

  const firstName = ref("");
  const lastName = ref("");
  const result = ref("");
  const showResult = ref(false);
  



  function showPerson() {
    result.value = firstName.value + "" + lastName.value
    showResult.value = true
  }

</script>

<template>
  <form @submit.prevent="submit">
    <label>firstName</label>
      <input type="text" v-model="firstName">
      <label>lastName</label>
      <input type="text" v-model="lastName">
      <button type="submit">Klick</button>
  </form>
  <div v-if="showResult">Deine Name ist {{ result }}</div>
</template>

<style scoped>

</style>