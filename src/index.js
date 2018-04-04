import Header from './components/header'


const components = {
	Header,
}

const uue = {
	...components,
}

const install = function (Vue, opt = {}) {
	if (install.installed) return

	Object.keys(uue).forEach(key => {
		Vue.component(key, uue[key])
	})
}

export default install
