<template>
  <v-app>
    <v-toolbar color="indigo" dark>
      <v-btn v-if="!this.$root.auth" icon :to="{name: 'Login'}">
        <v-icon>vpn_key</v-icon>
      </v-btn>
      <v-toolbar-title>Students List</v-toolbar-title>
      <v-spacer></v-spacer>
      <student-creator v-if="this.$root.auth"></student-creator>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
