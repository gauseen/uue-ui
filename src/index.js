import Header from './components/header'


const components = {
	Header,
}

const vui = {
	...components,
}

const install = function (Vue, opt = {}) {
	if (install.installed) return

	Object.keys(vui).forEach(key => {
		Vue.component(key, vui[key])
	})
}

export default install
