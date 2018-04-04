<template lang="pug">
div(id="app")
	transition(name="fade" appear)
		router-view
</template>

<script>
	export default {
		name: 'app',
		mounted () {
			// 浏览器返回按钮、刷新缓存页面
			this.refreshCachePage()
		},
		methods: {
			refreshCachePage () {
				window.onpageshow = (eve) => {
					if (eve.persisted) window.location.reload()
				}
			},
		},
	}
</script>

<style lang="stylus">
#app
	font-family: 'Avenir', Helvetica, Arial, sans-serif
</style>

