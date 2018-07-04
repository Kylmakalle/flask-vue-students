// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import App from './App'
// import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import Student from './components/Student'
import StudentCreator from './components/StudentCreator'

Vue.use(Vuetify)

Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.component('student-creator', StudentCreator)
Vue.component('student', Student)

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
