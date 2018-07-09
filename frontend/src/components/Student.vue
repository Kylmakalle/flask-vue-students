<template>
  <v-flex v-bind="{ [`xs2`]: true }">
    <v-card>
      <v-card-media
        :src="data.photo"
        height="250px"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs1 align-end>
              <span class="headline white--text" v-text="data.last_name"></span>
              <br>
              <span class="headline white--text" v-text="data.first_name"></span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-actions>
        <v-spacer></v-spacer>
        <student-editor v-bind:student_data="data" @update-list="listUpdater"></student-editor>
        <student-deleter v-bind:student_data="data" @update-list="listUpdater"></student-deleter>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>


<script>
  import StudentEditor from './StudentEditor.vue'
  import StudentDeleter from './StudentDeleter.vue'

  export default {
    components: {
      StudentEditor,
      StudentDeleter
    },
    name: 'Student',
    props: ['data'],
    methods: {
      listUpdater () {
        this.$emit('update-list')
      }
    }
  }
</script>
