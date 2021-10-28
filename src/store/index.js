import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		fatherState: {}
	},
	mutations: {
		setFatherState(state, data) {
			state.fatherState = data
		}
	}
})

export default store