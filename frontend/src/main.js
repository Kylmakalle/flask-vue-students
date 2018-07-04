// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import App from './App'
// import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
// import Student from './components/Student'

Vue.use(Vuetify)

Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.component('student', {
  props: ['data'],
  template: '<v-flex v-bind="{ [`xs2`]: true }">' +
  '<v-card>\n' +
  '                  <v-card-media\n' +
  '                    :src="data.photo"\n' +
  '                    height="250px"\n' +
  '                  >\n' +
  '                    <v-container fill-height fluid>\n' +
  '                      <v-layout fill-height>\n' +
  '                        <v-flex xs1 align-end>\n' +
  '                          <span class="headline white--text" v-text="data.first_name"></span>\n' +
  '                          <br>\n' +
  '                          <span class="headline white--text" v-text="data.last_name"></span>\n' +
  '                        </v-flex>\n' +
  '                      </v-layout>\n' +
  '                    </v-container>\n' +
  '                  </v-card-media>\n' +
  '                  <v-card-actions>\n' +
  '                    <v-spacer></v-spacer>\n' +
  '                    <v-btn slot="activator" icon>\n' +
  '                      <v-icon>edit</v-icon>\n' +
  '                    </v-btn>\n' +
  '                    <v-btn icon>\n' +
  '                      <v-icon>delete</v-icon>\n' +
  '                    </v-btn>\n' +
  '                  </v-card-actions>\n' +
  '                </v-card>' +
  '</v-flex>'
})

new Vue({
  el: '#app',
  data () {
    return {
      students: null,
      errored: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:5000/students/')
      .then(response => (this.students = response.data))
      .catch(error => console.log(error))
  }
})
