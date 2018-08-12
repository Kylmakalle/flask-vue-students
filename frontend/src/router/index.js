import Vue from 'vue'
import Router from 'vue-router'
import FullStudent from '../components/FullStudent.vue'
import StudentGrid from '../components/StudentsGrid.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/student/:id',
      name: 'FullStudent',
      component: FullStudent
    },
    {
      path: '/students-list',
      name: 'StudentsGrid',
      component: StudentGrid
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: {
        template: '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas orci quis metus gravida, vitae pretium lacus luctus. Vestibulum cursus felis et sollicitudin faucibus. Fusce sit amet ornare elit. Cras id lorem eget ligula aliquam pellentesque eu quis leo. Curabitur sed auctor dolor. Phasellus a volutpat eros. Donec ac diam sit amet diam lacinia viverra. Morbi malesuada pretium ex.</h2>'
      }

    }
  ]
})
