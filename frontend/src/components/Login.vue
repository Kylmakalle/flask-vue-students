<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-layout>
        <v-flex offset-xs4 xs4>
          <v-card>
            <v-card-text>
              <v-text-field
                label="Username"
                v-model="username"
                :rules="[ v => !!v || 'Username required']"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                :rules="[ v => !!v || 'Password required']"
                required
              ></v-text-field>
              <v-btn
                block
                @click.native="login"
              >
                Login
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :bottom=false
      :left=false
      :multi-line=false
      :right=false
      :timeout=5000
      :top=true
      :vertical=false
    >
      Incorrect info!
      <v-btn
        color="red"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        valid: true,
        snackbar: false,
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        if (this.$refs.form.validate()) { // Prevent reundant snackbar notifies
          if (this.isValid(this.username, this.password)) {  // Pseudovalidation, probably need a backend verification
            this.$root.username = this.username
            this.$root.password = this.password
            this.$root.auth = true // should be vuex + jwt authorisation
            if (this.snackbar) {
              this.snackbar = false
            }
            this.$router.push({name: 'StudentsGrid'})
          } else {
            this.snackbar = true
          }
        }
      },
      isValid (username, password) {
        return username === 'admin' && password === 'admin'
      }
    }
  }
</script>

<style scoped>
</style>
