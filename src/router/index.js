const routes = [
	{
		path: '/',
		name: '首页',
		component: () => import('@/components/index.vue')
	},
	{
		path: '/commit',
		name: '应用通信',
		component: () => import('@/components/commit.vue')
	},
	{
		path: '/style',
		name: '样式隔离',
		component: () => import('@/components/style.vue')
	}
]

export default routes