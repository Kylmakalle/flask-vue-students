<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" icon>
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Student Editor</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="First Name" v-model="student_data.first_name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Last Name" v-model="student_data.last_name"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Group Number" v-model="student_data.group_number"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Photo" v-model="student_data.photo"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
  export default {
    name: 'StudentEditor',
    props: ['student_data'],
    data: () => ({
      dialog: false
    })
  }
</script>

