<template>
	<div class="mui-page-content">
		<!-- 头部 -->
		<mt-header fixed title="我的"></mt-header>
		<div class="mui-scroll-wrapper">
			<div class="mui-scroll">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell mui-media">
						<a class="mui-navigate-right" href="#account">
							<img class="mui-media-object mui-pull-left head-img" 
								id="head-img" 
								src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4163356956,4069646919&fm=11&gp=0.jpg">
							<div class="mui-media-body">
								Taurus
								<p class='mui-ellipsis'>账号:lyf1959</p>
							</div>
						</a>
					</li>
				</ul>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a href="#account" class="mui-navigate-right">账号与安全</a>
					</li>
				</ul>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a href="#notifications" class="mui-navigate-right">新消息通知</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="#privacy" class="mui-navigate-right">隐私</a>
					</li>
					<li class="mui-table-view-cell">
						<a href="#general" class="mui-navigate-right">通用</a>
					</li>
				</ul>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a href="#about" class="mui-navigate-right">关于我们<i class="mui-pull-right update">V3.1.0</i></a>
					</li>
				</ul>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" style="text-align: center;">
						<a>退出登录</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Mine"
	}
</script>

<style scoped>
.mui-page-content{
	width: 100%;
	height: 100vh;
	background-color:#EFEFF4 ;
}
.mui-table-view:first-child{
	margin-top: 40px;
}
.mui-table-view:last-child {
margin-bottom: 30px;
}
.mui-table-view {
margin-top: 20px;
}
#head-img{
	border-radius: 20px;
}
</style>
