import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Todo from './components/Todo'

Vue.use(VueRouter)

const routes = [
    { path: '/', components: Todo }
]

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    // render: h => h(App),
    components: {
        App
    },
    router
}).$mount('#app')
