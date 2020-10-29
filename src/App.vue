<template>
  <div id="app">
    <!-- 中间内容部分 -->
    <router-view></router-view>
    <!-- tabbar部分 -->
	<!-- v-show="$route.meta.navShow==undefined||$route.meta.navShow"解决底部导航栏的显示以及隐藏问题：切换到子页面隐藏，在父页面显示 -->
    <nav class="mui-bar mui-bar-tab" v-show="$route.meta.navShow==undefined||$route.meta.navShow">
    	<router-link class="mui-tab-item-llb" to="/index">
    		<span class="mui-icon mui-icon-home"></span>
    		<span class="mui-tab-label">首页</span>
    	</router-link>
    	<router-link class="mui-tab-item-llb" to="/member">
    		<span class="mui-icon mui-icon-extra mui-icon-extra-addpeople"></span>
    		<span class="mui-tab-label">会员</span>
    	</router-link>
    	<router-link class="mui-tab-item-llb" to="/shopcar">
    		<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
    		<span class="mui-tab-label">购物车</span>
    	</router-link>
    	<router-link class="mui-tab-item-llb" to="/mine">
    		<span class="mui-icon mui-icon-contact"></span>
    		<span class="mui-tab-label">我的</span>
    	</router-link>
    </nav>
  </div>
</template>

<style>
	#app{
		padding-top: 40px;
	}
	.mui-bar-tab .mui-tab-item-llb.mui-active {
	    color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-llb {
	    display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	}
	.mui-bar-tab .mui-tab-item-llb .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>
