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

    <header class="container border-bottom">
    <ul class="nav">
    <li class="nav-item">
    <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
    <router-link class="nav-link" to="/createPerson">Create Person</router-link>
    </li>
    </ul>
    </header>
    
  <div>
    <RouterView/>
  </div>
</template>


