<template>
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

</template>