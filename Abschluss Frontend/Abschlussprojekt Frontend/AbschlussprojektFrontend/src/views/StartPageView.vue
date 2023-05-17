<template>
    <v-container fluid class="d-flex align-center justify-center">
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="pa-5" outlined>
            <v-card-title class="mb-4">
              <h3 class="text-h4">Willkommen zu ShopList</h3>
            </v-card-title>
            <v-card-text>
              Bitte loggen Sie sich ein oder registrieren Sie sich um ihre Einkaufslisten zu verwenden.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" to="/login">Login</v-btn>
              <v-btn color="primary" to="/register">Registrieren</v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  