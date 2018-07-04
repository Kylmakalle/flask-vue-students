<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" icon>
      <v-icon>add_circle_outline</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Student Creator</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="First Name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Last Name"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Group Number"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Photo"></v-text-field>
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
    name: 'StudentCreator',
    props: ['student_data'],
    data: () => ({
      dialog: false
    })
  }
</script>
