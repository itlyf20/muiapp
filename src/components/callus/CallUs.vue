<template>
	<div class="callus">
		<mt-header fixed title="联系我们">
			<router-link to="" slot="left">
			  <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<img src="http://p3.qhimg.com/d/inn/c1b575b5/banner.jpg" alt="">
			<!--  六宫格-->
			<ul class="mui-table-view mui-grid-view mui-grid-3">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/index/news">
						<span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
						<div class="mui-media-body">新闻业务</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/index/share">
						<span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
						<div class="mui-media-body">客服</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/index/shop">
						<span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
						<div class="mui-media-body">商城业务</div>
					</router-link>
				</li>
			</ul> 
		</div>
	</div>
</template>

<script>
</script>

<style>
	.content img{
		width: 100%;
		height: 150px;
	}
	.mui-grid-view.mui-grid-3{
		background-color: #FFFFFF;
		font-size: 18px;
	}
	.mui-grid-view.mui-grid-3 img{
		width: 40px;
		height: 40px;
		font-size: 20px;
	}
	.mui-grid-view.mui-grid-3 .mui-table-view-cell{
		border: 0;
	}
</style>
