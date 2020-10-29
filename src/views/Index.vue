<template>
	<div class="index">
		<!-- 头部 -->
		<mt-header fixed title="首页"></mt-header>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in items" :key="item.id">
			  <img :src="item.url" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<!--  六宫格-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/index/news">
					<img src="../assets/images/xinwen.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/index/share">
					<img src="../assets/images/fenxiang.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/index/shop">
					<img src="../assets/images/shangcheng.png" alt="">
					<div class="mui-media-body">商城购买</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/index/feedback">
					<img src="../assets/images/fankui.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/index/video">
					<img src="../assets/images/shipin.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/index/callus">
					<img src="../assets/images/lianxi.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</router-link>
			</li>
		</ul> 
	</div>
</template>

<script>
	export default{
		name:'Index',
		data(){
			return{
				// 轮播图
				items:[
					{id:1,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/jxv5znouudd.jpg"},
					{id:2,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/zir5bihd0de.jpg"},
					{id:3,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/3odbp3etrlw.jpg"}
				]
			}
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 200px;
	}
	.mui-grid-view.mui-grid-9{
		background-color: #FFFFFF;
		font-size: 18px;
	}
	.mui-grid-view.mui-grid-9 img{
		width: 40px;
		height: 40px;
		font-size: 20px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: 0;
	}
</style>
