<template>
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

  </template>