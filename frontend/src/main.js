// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Student from './components/Student'
import StudentCreator from './components/StudentCreator'
import StudentsGrid from './components/StudentsGrid'

Vue.use(Vuetify)

Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.component('students-grid', StudentsGrid)
Vue.component('student-creator', StudentCreator)
Vue.component('student', Student)

new Vue({
  el: '#app',
  router,
  components: {App},
  data () {
    return {
      auth: false,
      username: '',
      password: ''
    }
  },
  template: '<App/>'
})
