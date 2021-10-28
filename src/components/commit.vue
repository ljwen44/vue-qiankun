<template>
	<div>
		<p>方式一：通过store获取</p>
		<p>主应用传过来的值: {{ fatherState.firstName+ " " + fatherState.lastName }}</p>
		<hr>
		<p>方式二：通过监听获取</p>
		<p>旧的值为:{{ (oldInfo.firstName || "") + " " + (oldInfo.lastName || "") }}</p>
		<p>监听的值为: {{ info.firstName + " " + info.lastName }}</p>
		<p>修改父应用传过来的值</p>
		<button @click="updateValue">点击修改</button>
	</div>
</template>

<script>
import { mapState } from 'vuex'
// import actions from '../utils/action.js'
export default {
	name: 'vue-commit',
	data() {
		return {
			info: {
				firstName: 'init name',
				lastName: 'init name'
			},
			oldInfo: {}
		}
	},
	mounted() {
		this.$onGlobalStateChange((nv, ov) => {
			this.oldInfo = ov
			this.info = nv
		}, true)
	},
	computed: {
		...mapState(['fatherState'])
	},
	methods: {
		updateValue() {
			this.$setGlobalState({
				firstName: 'Xue',
				lastName: 'Zhi Qian'
			})
		}
	}
}
</script>

<style>

</style>