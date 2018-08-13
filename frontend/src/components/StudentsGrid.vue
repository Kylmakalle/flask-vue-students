<template>
  <section v-if="!this.$root.auth">
    <p>Auth first!</p>
  </section>
  <section v-else-if="errored">
    <p>Unable to retrieve information right now. Try again later.</p>
  </section>
  <div v-else class="students">
    <v-app id="inspire">
      <v-layout column>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <student @update-list="updateList"
                       v-for="student in students"
                       v-bind="{ data: student }"
                       :key="student.id">
              </student>
            </v-layout>
          </v-container>
        </v-card>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import StudentCreator from './StudentCreator.vue'
  import Student from './Student.vue'

  export default {
    components: {
      StudentCreator,
      Student
    },
    name: 'StudentsGrid',
    data: () => ({
      students: null,
      errored: null
    }),
    mounted () {
      this.updateList()
    },
    watch: {
      students: function () {
        this.debouncedupdateList()
      }
    },
    created: function () {
      this.debouncedupdateList = _.debounce(this.updateList, 500)
    },
    methods: {
      updateList () {
        axios
          .get('http://localhost:7777/students/')
          .then(response => (this.students = response.data))
          .catch(error => console.log(error))
      }
    }
  }
</script>
