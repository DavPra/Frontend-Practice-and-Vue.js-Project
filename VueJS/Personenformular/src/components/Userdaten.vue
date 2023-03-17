<template>
  <div>
    <h1>Persons List</h1>
    <form @submit.prevent="addPerson">
      <div>
        <label for="firstName">First Name:</label>
        <input id="firstName" v-model="firstName" required>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input id="lastName" v-model="lastName" required>
      </div>
      <div>
        <label for="age">Age:</label>
        <input id="age" v-model.number="age" required>
      </div>
      <button type="submit">Add Person</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in persons" :key="index">
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>

    <script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'PersonsList',
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(0);
    const persons = ref([]);

    function addPerson() {
      const person = { firstName: firstName.value, lastName: lastName.value, age: age.value };
      persons.value.push(person);
      firstName.value = '';
      lastName.value = '';
      age.value = 0;
    }
  </script>