import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
let router = null
let instance = null


function render(props = {}) {
	const { container } = props
	router = new VueRouter({
		base: window.__POWERED_BY_QIANKUN__ ? '/vue-qiankun' : '',
		mode: 'history',
		routes
	})

	instance = new Vue({
		router,
		store,
		render: (h) => h(App)
	}).$mount(container ? container.querySelector('#app') : '#app')
}
localStorage.setItem("vue-qiankun", "aaa")
var __webpack_public_path__ = null
if (window.__POWERED_BY_QIANKUN__) {
	__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
console.log("vue: " + __webpack_public_path__)
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}

export async function bootstrap() {
	
}

export async function mount(props) {
	console.log(props)
	if (props.state) {
		store.commit('setFatherState', props.state)
	}
	Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
	Vue.prototype.$setGlobalState = props.setGlobalState;
	render(props)
}

export async function unmount() {
	instance.$destroy()
	instance.$el.innerHTML = ''
	instance = null
	router = null
}
