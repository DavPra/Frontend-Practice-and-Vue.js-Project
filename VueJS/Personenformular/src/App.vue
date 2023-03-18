<script setup>
import { ref } from 'vue';
import Userdaten from './components/Userdaten.vue';
import FormUser from './components/FormUser.vue';
import User-Table from './components/User-Table.vue';

const persons = ref([])

function addPerson(person) {
  persons.value.push({
    firstname: person.firstname,
    lastname: person.lastname
    year: person.year
  })
}

function removeLast() {
  persons.value.pop();
}

function removeAll() {
  persons.value = []
}
</script>

<template>

  <div class="container">
    <h1>Personen Array</h1>
    <div class="row">
      <div>
        <FormUser @update="addPerson"/>
      </div>
      <div>
        <div>
          <button class="btn btn-danger" @click=" removeLast">Remove Last</button>
          <button class="btn btn-danger" @click="removeAll">Remove All</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
