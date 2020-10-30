<template>
	<div class="share">
		<!-- 头部 -->
		<mt-header fixed title="小飞程序员">
			<router-link to="" slot="left">
			  <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
			</router-link>
		</mt-header>
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</a>
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
				</div>
			</div>
		</div>
		<viewer :images="imgs">
			<img v-for="src in imgs" :src="src.url" :key="src.title">
		</viewer>
	</div>
</template>

<script>
	import mui from '../../assets/lib/js/mui.js'
	export default{
		data(){
			return{
				 imgs: [
				       {
				          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
				          title: '图片1'
				        },
				        {
				          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg',
				          title: '图片2'
				        }
				      ]
			}
		},
		mounted() {
			mui(".mui-scroll-wrapper").scroll({
				deceleration:0.0005
			})
		}
	}
</script>

<style scoped>
	* { touch-action: none; }
	.share img{
		width: 100%;
		height: auto;
		padding: 10px;
	}
</style>
