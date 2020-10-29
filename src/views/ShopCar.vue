<template>
  <div class="shopcar-container">
	<!-- 头部 -->
	<mt-header fixed title="购物车"></mt-header>
    <div class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- $store.getters.getProdsSelected得到购物车种所有商品的选择状态数组 [item.id] 为第几个-->
            <!-- v-model双向绑定 -->

            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603967471545&di=77266e4158b92a17232629998afd67b6&imgtype=0&src=http%3A%2F%2Fimage4.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070088799-000000010001982291_3_800x800.jpg" alt="">
            <div class="info">
              <h1>华为笔记本电脑</h1>
              <p>
                <span class="price">￥210</span>
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
                <a href="#" >删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red">15</span> 件， 总价
              <span class="red">￥3500</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../assets/lib/js/mui.js"
export default {
  name:"ShpCar",
  data() {
    return {
   
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

<style scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;}
  .goods-list .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 130px;
    }
    h1 {
      font-size: 16px;
    }
    .info {
	  margin: 10px 20px;
	  line-height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
	  }
      .price {
        color: red;
        font-weight: bold;
      }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
    .red { 
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
</style>
