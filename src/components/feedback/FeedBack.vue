<template>
	<div class="feedback">
		<!-- 头部 -->
		<mt-header fixed title="留言反馈">
			<router-link to="" slot="left">
			  <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="mui-content-padded">
			<p>问题和意见</p>
			<div class="row mui-input-row">
				<textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
			</div>
			<p>QQ/邮箱</p>
			<div class="mui-input-row">
				<input id='contact' type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
			</div>
			<div>
				<mt-button class="btns" type="primary">提交</mt-button>
			</div>
	    </div>
	</div>
</template>

<script>
</script>

<style>
	.btns{
		width:80%;
		display:block;
		margin:30px auto
	}
	.mui-content-padded input,textarea{
		font-size:12px;
	}
</style
>
