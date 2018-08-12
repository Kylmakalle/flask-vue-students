<template>
  <section v-if="!this.$root.auth">
    <p>Auth first!</p>
  </section>
  <v-form v-else ref="form" v-model="valid" lazy-validation>
    <v-card-title>
      <span class="headline">Student Info</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field label="First Name" v-model="student_data.first_name"
                          :rules="[v => !!v || 'First name is required']" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field label="Last Name" v-model="student_data.last_name"
                          :rules="[v => !!v || 'Last name is required']" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Group Number" v-model="student_data.group_number"
                          :rules="[v => !!v || 'Group number is required']" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Photo" v-model="student_data.photo"
                          :rules="[v => !!v || 'Photo link is required']" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Facility" v-model="student_data.facility"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-select
              v-model="student_data.gender"
              :items="gender_items"
              label="Gender"
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-container fluid>
              <v-checkbox label="Love cakes" v-model="student_data.cakes"></v-checkbox>
              <v-checkbox label="Love Python ❤️" v-model="student_data.python"></v-checkbox>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat :to="{name : 'StudentsGrid'}">Close</v-btn>
      <v-btn color="blue darken-1" :disabled="!valid" flat @click.native="putNow()">Save</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
  import axios from 'axios'
  import router from '../router'

  export default {
    name: 'FullStudent',
    data () {
      return {
        valid: true,
        id: this.$route.params.id,
        student_data: {},
        gender_items: ['Male', 'Female', 'Apache Attack Helicopter', 'Other']
      }
    },
    mounted () {
      this.updateStudent()
    },
    methods: {
      updateStudent () {
        axios
          .get('http://localhost:7777/students/' + this.id)
          .then(response => (this.student_data = response.data))
          .catch(error => console.log(error))
      },
      putNow () {
        if (this.$refs.form.validate()) {
          axios.put('http://localhost:7777/students/' + this.id,
            this.student_data
          ).catch(error => console.log(error))
          router.push({name: 'StudentsGrid'})
          this.$emit('update-list')
        }
      }
    }
  }
</script>

<style scoped>

</style>
