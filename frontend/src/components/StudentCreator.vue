<template>
  <div v-if="show">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" icon>
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title>
            <span class="headline">Student Creator</span>
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
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" :disabled="!valid" flat
                   @click.native="postNow(); clearData()">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'StudentCreator',
    data: () => ({
      valid: true,
      show: true,
      dialog: false,
      student_data: {}
    }),
    methods: {
      postNow () {
        if (this.$refs.form.validate()) {
          axios.post('http://localhost:7777/students/',
            this.student_data
          ).catch(error => console.log(error))
          this.dialog = false
          this.$emit('update-list')
        }
      },
      clearData () {
        this.student_data = {}
      }
    }
  }
</script>
