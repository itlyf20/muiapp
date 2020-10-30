<template>
	<div class="member">
		<!-- 头部 -->
		<mt-header fixed title="会员中心"></mt-header>
		<div class="content">
			<div class="content-top">
				<div class="top-title">
					<div class="info">
						<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4163356956,4069646919&fm=11&gp=0.jpg" alt="">
						<span><h1>Taurus</h1></span>
						<span>信用分：600分</span>
					</div>
					<div class="member-info">
						<h1>MEMBER</h1>
						<h3>会员</h3>
					</div>
				</div>
			</div>
			<div class="content-center">
				<ul class="mui-table-view mui-grid-view mui-grid-4">
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
							<div class="mui-media-body">客服服务</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span class="mui-icon mui-icon-extra mui-icon-extra-gold"></span>
							<div class="mui-media-body">金币权益Lv1</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
							<div class="mui-media-body">生日礼遇Lv1</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span class="mui-icon mui-icon-more-filled"></span>
							<div class="mui-media-body">更多权益</div>
						</a>
					</li>
				</ul> 
			</div>
			
			<div class="content-center-c">
				<ul class="mui-table-view mui-grid-view mui-grid-4">
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span>0</span>
							<div class="mui-media-body">金币</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span>0</span>
							<div class="mui-media-body">钢镚</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
						<a href="#">
							<span>0</span>
							<div class="mui-media-body">优惠券</div>
						</a>
					</li>
				</ul> 
			</div>
			<div class="content-bottom">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a href="#about" class="mui-navigate-right">
							我的任务
							<span class="mui-pull-right update">查看全部任务</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="content-bottom-v">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell renwu">
						<img src="../assets/images/speed.png" alt="">
						<div class="ts">
							<h3>首次开通会员</h3>
							<p>优惠券:200元</p>
							<p>金币：50个</p>
						</div>
						<mt-button class="btns" type="primary">一键开通</mt-button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Member',
	}
</script>

<style scoped>
	.member{
		width: 100%;
		height: 100vh;
		background-color: #EFEFF4;
	}
	.content-top{
		width: 100%;
		height: 160px;
		position: relative;
		background-color: #000000;
	}
	.content-top .top-title{
		width: 80%;
		height: 120px;
		position: absolute;
		left: 50%;
		top: 62%;
		transform: translate(-50%, -50%);
		background-color: #C8C8CD;
		box-shadow: -4px -1px 5px 0px rgba(0,0,0,0.75);
		-webkit-box-shadow: -4px -1px 5px 0px rgba(0,0,0,0.75);
		-moz-box-shadow: -4px -1px 5px 0px rgba(0,0,0,0.75);
	}
	.info{
		display: flex;
		padding: 10px 10px;
		justify-content: space-between;
		font-size: 15px;
	}
	.info h1{
		font-size: 18px;
		margin-left: -30px;
		margin-top: 12px;
	}
	.info span:last-child{
		margin-top: 12px;
	}
	.info img{
		width: 40px;
		height: 40px;
		border-radius: 40px;
	}
	.member-info h1{
		padding: 2px 10px ;
		font-size: 16px;
		color: #FFFFFF;
	}
	.member-info h3{
		padding: 2px 10px ;
		font-size: 13px;
		color: gainsboro;
	}
	.content-center .mui-grid-view.mui-grid-4{
		width: 100%;
		height: 60px;
		background-color: #555555;
		color: #FFFFFF;
	}
	.content-center ul li{
		width: 25%;
	}
	.content-center .mui-grid-view.mui-grid-4 .mui-media-body{
		color: lightgray;
		font-size: 8px;
	}
	.content-center-c .mui-grid-view.mui-grid-4 .mui-media-body{
		color: grey;
		font-size: 15px;
	}
	.content-bottom{
		margin-top: 10px;
		position: relative;
	}
	.content-bottom .update{
		color: lightgray;
	}
	.content-bottom-v{
		position: relative;
	}
	.renwu{
		display: flex;
		justify-content: space-between;
	}
	.renwu img{
		width: 60px;
		height: 60px;
	}
	.btns{
		font-size: 11px;
		width: 25%;
		height: 30px;
		position: absolute;
		top: 26px;
		right: 10px;
	}
	.ts{
		position: absolute;
		left: 85px;
	}
	.ts h3{
		font-size: 16px;
	}
</style>