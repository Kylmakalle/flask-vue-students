<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-btn slot="activator" icon>
      <v-icon>delete</v-icon>
    </v-btn>
    <v-card>
      <v-card-title class="headline">Delete Student?</v-card-title>
      <v-card-text>Are you sure you want to delete student with id {{ student_data.id }}? That can't be undone!
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel</v-btn>
        <v-btn color="red darken-1" flat @click.native="deleteNow()">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'StudentDeleter',
    props: ['student_data'],
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      deleteNow () {
        axios.delete('http://localhost:7777/students/' + this.student_data.id.toString()
        ).catch(error => console.log(error))
        this.dialog = false
        this.$emit('update-list')
      }
    }
  }
</script>
