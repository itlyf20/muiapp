<template>
  <div class="shop">
  <!-- 头部 -->
  <mt-header fixed title="商城购买">
	<router-link to="" slot="left">
	  <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
	</router-link>
  </mt-header>
    <transition>
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-header">华为笔记本电脑</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603967471545&di=77266e4158b92a17232629998afd67b6&imgtype=0&src=http%3A%2F%2Fimage4.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070088799-000000010001982291_3_800x800.jpg" alt />
        </div>
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥520</del>&nbsp;&nbsp;
            <br />销售价：
            <span class="now_price">￥320</span>
          </p>
          <p>库存情况：35620件</p>
          <p>
            购买数量：
            <div class="mui-numbox">
            	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            	<input
            	      id="test"
            	      class="mui-input-numbox"
            	      type="number"
            	      value="1"
            	      ref="numbox"
            	    />
            	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../assets/lib/js/mui.js"
export default {
   name:"Shop",
   data() {
     return {
		ballFlag: false
     };
   },
    mounted() {//mounted阶段，实例挂载于Dom上（可处理业务逻辑）
       mui(".mui-numbox").numbox(); // 初始化数字选择框组件
     },
     props: ["max"],     //父向子传值，父:max="prodInfo.stock_quantity"
     watch: {  //监听max，设置上限
       max: function(newVal, oldVal) { 
         mui(".mui-numbox")
           .numbox()
           .setOption("max", newVal);
       }
     }
 };

</script>

<style lang="css" scoped>
.mui-card-content {
  display: flex;
}
.mui-card-content-inner {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mui-card-content-inner img {
  width: 120px;
  height: 120px;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 255px;
  left: 280px;
}
</style>
