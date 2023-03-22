<script setup>
   import { ref, computed} from 'vue';
 
   const firstname = ref('')
   const lastname = ref('')
   const age = ref()
   const emit = defineEmits('update')

   const year = computed(() => { 
      let currentYear = new Date().getFullYear();
      return currentYear - age.value;
   })

  function emitAddPerson() {
    emit('update',{
        firstname: firstname.value,
        lastname: lastname.value,
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
            <label for="firstName">Vorname:</label>
            <input type="text" v-model="firstname" class="form-control" id="firstName">
          </div>
          <div class="form-group">
            <label for="lastName">Nachname:</label>
            <input type="text" v-model="lastname" class="form-control" id="lastName">
          </div>
          <div class="form-group">
            <label for="birthYear">Alter:</label>
            <input type="number" v-model="age" class="form-control" id="birthYear">
          </div>
          <div class="form-group">
            <button class="btn btn-success mt-4">Hinzufügen</button>
          </div>
    </form>
</template>