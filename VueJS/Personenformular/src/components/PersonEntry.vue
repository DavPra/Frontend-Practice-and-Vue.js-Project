<script setup>

const props = defineProps(['person'])

</script>
<template>
    <td scope="row">{{ person.firstname }}</td>
    <td>{{ person.lastname}}</td>
    <td>{{ person.year}}</td>
</template>