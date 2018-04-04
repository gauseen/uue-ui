<template lang="pug">
	section
		span header 组件： {{test}}
</template>

<script>
export default {
	props: {
		test: {
			type: String,
			default: '默认值'
		}
	},
}
</script>

<style lang="stylus" scoped>

</style>

