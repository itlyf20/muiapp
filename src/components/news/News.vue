<template>
	<div class="news">
		<!-- 头部 -->
		<mt-header fixed title="小飞程序员">
			<router-link to="" slot="left">
			  <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
			</router-link>
		</mt-header>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../assets/images/fankui.png">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class='mui-ellipsis'>
							<span>发布时间：2020-10-28 12:12:28</span>
							<span>点击：0次</span>
						</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../assets/images/fankui.png">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class='mui-ellipsis'>
							<span>发布时间：2020-10-28 12:12:28</span>
							<span>点击：0次</span>
						</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../assets/images/fankui.png">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class='mui-ellipsis'>
							<span>发布时间：2020-10-28 12:12:28</span>
							<span>点击：0次</span>
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
</script>

<style scoped>
	.mui-table-view li h1{
		font-size: 14px;
	}
	.mui-ellipsis{
		font-size: 12px;
		color: #0000FF;
		display: flex;
		justify-content: space-between;
	}
</style>
