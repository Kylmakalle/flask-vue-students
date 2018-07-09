<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" icon>
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-title>
          <span class="headline">Student Editor</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="First Name" v-model="form_student_data.first_name"
                              :rules="[v => !!v || 'First name is required']" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Last Name" v-model="form_student_data.last_name"
                              :rules="[v => !!v || 'Last name is required']" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Group Number" v-model="form_student_data.group_number"
                              :rules="[v => !!v || 'Group number is required']" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Photo" v-model="form_student_data.photo"
                              :rules="[v => !!v || 'Photo link is required']" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" :disabled="!valid" flat @click.native="putNow()">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>


<script>
  import axios from 'axios'

  export default {
    name: 'StudentEditor',
    props: ['student_data'],
    data: () => ({
      valid: true,
      dialog: false,
      form_student_data: {}
    }),
    mounted () {
      if (this.student_data) {
        this.form_student_data = this.student_data
      }
    },
    methods: {
      putNow () {
        if (this.$refs.form.validate()) {
          axios.put('http://localhost:5000/students/' + this.form_student_data.id.toString(), {
            data: this.form_student_data
          }).catch(error => console.log(error))
          this.dialog = false
          this.$emit('update-list')
        }
      }
    }
  }
</script>

