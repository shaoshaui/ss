<!--
 * @Description: 自定义首页模块
 * @Author: shaoshaui
-->
<template>
  <div class="ui-home">
    <ul class="ui-project">
      <li class="item" v-for="v in siteData" :key="v.name">
        <a class="link" :href="v.link" target="_blank">
          <h3 :class="['title', v.className]">{{ v.name }}</h3>
          <p class="desc">{{ v.desc }}</p>
        </a>
      </li>
    </ul>
  </div>
  <BackTop></BackTop>
</template>
<script setup>
import { siteData } from '../model/siteData.js'

</script>
<style lang="scss">
/*黑灰深色系*/
.color-black {background: #003;}
.color-black1 {background: #333538;}
.color-black2 { background: #1d365d;}
.color-black-light {background: #666;}
.color-black-light2 {background: #999;}

/*绿色系*/
.color-green {background: #00a300;}
.color-green1 {background: #27ae60;}
.color-green-dark {background: #1e7145;}
.color-green-light {background: #99b433;}
.color-green-deep {background: #2b9646;}
.color-green-deep2 {background: #396;}
.color-green-deep3 {background: #00C68F;}
.color-green-light1 {background: #6fa014;}
.color-green-light2 {background: #94c849;}
.color-green-light3 {background: #4bc0c0;}
.color-green-gradient {
	background: -webkit-linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
	background: linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
}
.color-green-gradient1{
	background: -webkit-linear-gradient(120deg, #86b91a 30%, #edd532);
	background: linear-gradient(120deg, #86b91a 30%, #edd532);
}
.color-green-gradient2{
	background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
	background: linear-gradient(315deg, #42d392 25%, #647eff);
}
.color-green-gradient3{
	background: -webkit-linear-gradient(315deg, #51a256 25%, #f7d336);
	background: linear-gradient(315deg, #51a256 25%, #f7d336);
}

.color-green-gradient4{
	background: -webkit-linear-gradient(120deg, #24E9A6 25%, #04A7F2);
	background: linear-gradient(120deg, #51a256 25%, #04A7F2);
}


/*紫色系*/
.color-pink {background: #9f00a7;}
.color-pink1 {background: #90f;}
.color-pink-dark {background: #7e3878;} 
.color-pink-deep {background: #702863;}
.color-pink-light {background: #7a47a7;}
.color-pink-light2 {background: #764abc;}
.color-pink-gradient {
	background: -webkit-linear-gradient(120deg, #bd44fe 35%, #42d1ff);
	background: linear-gradient(120deg, #bd44fe 35%, #42d1ff);
}

/*蓝紫色系*/
.color-purple {background: #603cba;}
.color-purple-light {background: #6061b1;}
.color-purple-deep {background: #4f2ea2;}

/*蓝色系*/
.color-blue {background: #2d89ef;}
.color-blue-dark {background: #2b5797;}
.color-blue-deep {background: #2489c5;}
.color-blue-deep1 {background: #245a8b;}
.color-blue-deep2 {background: #006;}
.color-blue-deep3 {background: #036;}
.color-blue-deep4 {background: #3178c6;}
.color-blue-deep4 {background: #3360a3;}
.color-blue-deep5 {background: #2468f2;}
.color-blue-deep6 {background: #1677ff;}
.color-blue-light {background: #eff4ff;}
.color-blue-light1 {background: #00aeef;}
.color-blue-light2 {background: #1abc9c;}
.color-blue-light3 {background: #46bfbd;}
.color-blue-light4 {background: #39f;}
.color-blue-light5 {background: #69c;}
.color-blue-light6 {background: #2db7f5;}
.color-blue-light7 {background: #36a2eb;}
.color-blue-light8 {background: #1e80ff;}
.color-blue-light9 {background: #049EF4;}
.color-blue-darklight {background: #3c7780;}
.color-blue-darklight1 {background: #51a6ad;}
.color-blue-darklight2 {background: #2aada2;}
.color-blue-gradient {
	background: -webkit-linear-gradient(180deg, #006FF9 40%, #00D0D8);
	background: linear-gradient(180deg, #006FF9 40%, #00D0D8);
}

/*橙色系*/
.color-orange {background: #e3a21a;}
.color-orange1 {background: #f60;}
.color-orange-dark {background: #da532c;}
.color-orange-gray {background: #c47f3e;}
.color-orange-deep {background: #b72f20;}
.color-orange-deep1 {background: #fb6f18;}

/*红色系*/
.color-red {background: #b91d47;}
.color-red-light {background: #f05033;}
.color-red-light1 {background: #cf4646;}
.color-red-light2 {background: #dd5d5d;}
.color-red-light3 {background: #ff6384;}
.color-red-light4 {background: #e14d97;}
.color-red-deep {background: #c23916;}
.color-red-deep2 {background: #c30;}
.color-red-deep3 {background: #DF3337;}
.color-red-deep4 {background: #F72C5B;}


/*黄色系*/
.color-yellow {background: #ffc40d;}
.color-yellow1 {background: #f29500;}
.color-yellow-light {background: #d9b700;}
.color-yellow-light1 {background: #eeda7c;}


/*其他色系*/
.color-999966 {background: #996;}
.color-9999CC {background: #99c;}
.color-99CCFF {background: #9cf;}


/**首页网址推荐**/
.ui-home {
  width: 1152px;
  margin: 0 auto 20px;
  margin-left: -100px;
  .ui-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    font-size: 26px;
  }
}
.ui-project {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
	justify-content: space-between;
	margin-top: 20px;
  .item,
  .link {
    height: 192px;
    // margin: 0!important;
    margin-top: 15px;
  }
  .item {
    .link {
      display: block;
      color: #333;
      background: #fff;
      border: 1px solid #f1f1f1;
      border-radius: 6px;
      transition: all .4s;
    }
    h3{margin: 0;}
    .link:hover {
      -webkit-filter: brightness(1.2);
      box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
      transform: rotateY(-0.1deg) scale(1.03) translateZ(0);
    }
    .title {
      height: 80px;
      padding-top: 25px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      border-radius: 6px 6px 0 0;
    }
    .desc {
      line-height: 2;
      padding: 0 12px;
      margin-top: 14px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>