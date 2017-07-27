// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Env from './config/env'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router/router'

Vue.prototype.Env = Env;

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router
}).$mount('#app')