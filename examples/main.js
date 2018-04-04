import Vue from 'vue'
import Router from 'vue-router'
import Vui from 'src/index.js'

import App from './app.vue'
import RouterConfig from './router'

Vue.use(Router)
Vue.use(Vui)

var vm = new Vue({
	el: '#app',
	router: RouterConfig,
	template: '<App/>',
	components: { App }
})
