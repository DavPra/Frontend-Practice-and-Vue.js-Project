<script setup>
import {ref, watch} from 'vue'

const props = defineProps(['person'])
const emit = defineEmits(['update'])

const showDialog = ref(false)
const entryCopy = ref('')
</script>
<template>
    <td scope="row">{{ person.firstname }}</td>
    <td>{{ person.lastname }}</td>
    <td>{{ person.year }}</td>
    <button type="button" class="btn btn-warning btn-sm" @click="showDialog=true">Bearbeiten</button>
    <dialog v-if="showDialog" open>
        <h3> {{person}} bearbeiten</h3>
        <form @submit.prevent="updateEntry">
            <label class="d-block mb-3">
                Neuer Eintrag
                <input type="text" class="form-controll" v-model="entryCopy">
            </label>
        </form>
    </dialog>
    <button type="button" class="btn btn-danger btn-sm" @click="">Löschen</button>
</template>