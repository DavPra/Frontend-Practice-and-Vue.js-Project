<script setup>
   import { ref } from 'vue';
   import PersonEntry from './components/PersonEntry.vue';
   import PersonForm from './components/PersonForm.vue';

   const persons = ref([])

   function addPerson(person) {
     persons.value.push({
        firstname: person.firstname,
        lastname: person.lastname,
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
    <h1 class="bg-primary text-white rounded px-4">PersonenArray - mit Roberts BLABLA</h1>
    <div class="row">
      <div class="col-sm-6 bg-light">
        <PersonForm @update="addPerson"/>
      </div>
      <div class="col-sm-6 mt-4">
        <div class="form-group">
          <button class="btn btn-danger mb-4" @click="removeLast()">Letztes Element löschen</button><br>
          <button class="btn btn-danger" @click="removeAll()">Alles löschen</button>
        </div>
        <div class="table mt-4">
          <table class="table">
            <thead>
              <th scope="col">Vorname</th>
              <th scope="col">Nachname</th>
              <th scope="col">Geburtsjahr</th>
            </thead>
            <tbody>
              <tr v-for="person in persons">
                <PersonEntry :person='person'/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
