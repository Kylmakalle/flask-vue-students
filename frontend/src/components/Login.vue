<template>
  <v-container>
    <v-layout>
      <v-flex offset-xs4 xs4>
        <v-card>
          <v-card-text>
            <v-text-field
              label="Username"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
            ></v-text-field>
            <v-btn
              block
              @click="login"
            >
              Login
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$root.username = this.username
        this.$root.password = this.password
        this.$root.auth = true
        this.$router.push({name: 'StudentsGrid'})
      }
    }
  }
</script>

<style scoped>
</style>
