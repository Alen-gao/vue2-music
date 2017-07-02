// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'


Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router
}).$mount('#app')