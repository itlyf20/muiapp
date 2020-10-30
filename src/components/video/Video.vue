<template>
<div class="video">
	<mt-header fixed title="视频专区">
		<router-link to="" slot="left">
		  <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
		</router-link>
	</mt-header>
	<div class="content">
		<div class="videopleyer" v-for="item in source" :key="item.id">
			<h1>{{item.title}}</h1>
			<video :preload="preload"
				   :poster="item.videoImg" 
				   :height="height" 
				   :width="width" 
				   align="center" 
				   :controls="controls"  
				   :autoplay="autoplay">
				<source :src="item.videoSrc" type="video/mp4">
			</video>
			<div class="cz">
				<a>
					<div class="mui-icon mui-icon-plusempty"></div>
					<div>关注</div>
				</a>
				<a>
					<div class="mui-icon mui-icon-chatbubble"></div>
					<div>评论</div>
				</a>
				<a>
					<div class="mui-icon mui-icon-extra mui-icon-extra-heart"></div>
					<div>点赞</div>
				</a>
				<a>
					<div class="mui-icon mui-icon-pengyouquan"></div>
					<div>分享</div>	
				</a>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Video',
	data () {
	  return {
		source:[
			{
				id:1,
				title:"海鸥你尽情的飞向属于你的生活吧！",
				videoSrc: 'http://vjs.zencdn.net/v/oceans.mp4',
				videoImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2062307482,1942308797&fm=26&gp=0.jpg',
			},
			{
				id:2,
				title:"大笨niu你就是那么可爱！",
				videoSrc:require('../../assets/mp4/dongman.mp4'),
				videoImg:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2062307482,1942308797&fm=26&gp=0.jpg'
			}
		],
		playStatus: '',
		muteStatus: '',
		isMute: true,
		isPlay: false,
		width: '100%', // 设置视频播放器的显示宽度（以像素为单位）
		height: 'auto', // 设置视频播放器的显示高度（以像素为单位）
		preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
		controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
		autoplay: ''
	    }
	}
}
</script>

<style>
	.video{
		width: 100%;
		height: 100vh;
		background-color: #EFEFF4;
	}
	.videopleyer{
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
	}
	.videopleyer h1{
		font-size: 15px;
		padding: 10px 10px;
	}
	.videopleyer video{
		padding: 1px 10px;
	}
	.cz{
		width: 100%;
		display: flex;
		font-size: 11px;
	}
	.cz a{
		border-right: 1px solid ghostwhite;
		width: 25%;
		text-align: center;
		color: gray;
		margin-top: -3px;
	}
</style>
