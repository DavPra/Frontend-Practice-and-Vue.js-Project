<template>
  <div>
  <h1 style="border: 2px black solid; padding:10px"> PersonenArray </h1>
    <form @submit.prevent="addPerson">
      <div>
        <label for="first-name">First Name:</label> <br>
        <input id="first-name" type="text" v-model="firstName" required>
      </div>
      <div>
        <label for="last-name">Last Name:</label> <br>
        <input id="last-name" type="text" v-model="lastName" required>
      </div>
      <div>
        <label for="age">Age:</label> <br>
        <input id="age" type="number" v-model.number="age" required>
      </div> <br>
      <button type="submit" class="btn btn-primary">Add Person</button>
    </form>
<br>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in persons" :key="person.id">
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>
    </table>

    <button v-if="persons.length > 0" @click="deletePerson" class="btn btn-primary">Delete Last Entry</button>
    <button v-if="persons.length > 0" @click="deletePerson" class="btn btn-primary" style="margin-left:10px">Delete All</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const persons = ref([]);
    const firstName = ref('');
    const lastName = ref('');
    const age = ref('');

    const addPerson = () => {
      persons.value.push({ 
        id: persons.value.length + 1,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
      });
      firstName.value = ''
      lastName.value = ''
      age.value = ''
    };

    const deletePerson = () => {
      persons.value.pop();
    };

    return {
      persons,
      firstName,
      lastName,
      age,
      addPerson,
      deletePerson,
    };
  },
};
</script>
