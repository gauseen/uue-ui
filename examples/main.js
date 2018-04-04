import Vue from 'vue'
import Router from 'vue-router'
import Uueui from 'src/index.js'

import App from './app.vue'
import RouterConfig from './router'

Vue.use(Router)
Vue.use(Uueui)

var vm = new Vue({
	el: '#app',
	router: RouterConfig,
	template: '<App/>',
	components: { App }
})
