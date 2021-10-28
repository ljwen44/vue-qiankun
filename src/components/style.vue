<template>
	<div>
		<p class="child-style">样式隔离,这是子应用的颜色</p>
		<p>通过在start函数添加沙箱配置，让应用之间样式隔离</p>
	</div>
</template>

<script>
export default {
	name: 'vue-style'
}
</script>

<style>
.child-style {
	color: red;
	font-size: 24px;
}
</style>