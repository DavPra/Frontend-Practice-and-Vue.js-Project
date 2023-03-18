<script setup>

const emit = defineEmits('update')

const year = computed(() => {
    let currentYear = new Date().getFullYear
    return currentYear - age.value;
})

function emitAddPerson() {
    emit('update',{
        firstname: firstname.value,
        lastname: lastname.value
        year: year.value
    })

    firstname.value = ''
    lastname.value = ''
    age.value = ''
}
</script>



<template>
<form class="form" @submit.prevent="emitAddPerson">
    <div class="form-group">
      <label for="firstName">First Name:</label> <br>
      <input type="text" v-model="firstName" required>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label> <br>
      <input type="text" v-model="lastName" required>
    </div>
    <div class="form-group">
      <label for="age">Age:</label> <br>
      <input type="number" v-model.number="age" required>
    </div> <br>
    <button type="submit" class="btn btn-primary">Add Person</button>
  </form>

  </template>