<template>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-btn slot="activator" icon>
        <v-icon>delete</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="headline">Delete Student?</v-card-title>
        <v-card-text>Are you sure you want to delete student? That can't be undone!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="red darken-1" flat @click.native="dialog = false">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'StudentDeleter',
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
