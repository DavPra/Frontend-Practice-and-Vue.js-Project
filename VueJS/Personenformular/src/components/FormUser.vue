<template>
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

  </template>