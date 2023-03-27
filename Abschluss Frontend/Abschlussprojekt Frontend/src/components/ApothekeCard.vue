<script setup>

export default {
    name: 'CurrentDate',
    data() {
        return {
            date: new Date()
        }
    }
}
</script>

<template>
    <v-card
  title="Einkaufsliste Apotheke"
  subtitle: 
  text="..."
  variant="tonal"
  style="margin: 20px;"
>
  <v-card-actions>
    <v-btn>Bearbeiten</v-btn>
    <v-btn>Löschen</v-btn>
  </v-card-actions>
</v-card>


</template>