<template>
<!-- 导航栏 -->
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>

    <el-row>
        <!-- 轮播图 -->
        <el-col :span="14">
            <Slider />
        </el-col>
        <!-- 轮播图旁边图片导航 -->
        <el-col :span="4">
            <div class="m-life-pic"></div>
        </el-col>
        <!-- 导航右侧登录 -->
        <el-col :span="6">
            <div class="m-life-login">
                <h4>
                    <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
                </h4>

                <p class="m-life-login-name">Hi{{ $store.state.userName ? $store.state.userName : '你好!' }}</p>
                <p v-if="!$store.state.userName"><el-button round><router-link :to="{name:'/'}">立即登录</router-link></el-button></p>
                <p v-if="!$store.state.userName"><el-button round><router-link :to="{name:'/'}">注册</router-link></el-button></p>
            </div>
        </el-col>
    </el-row>

    <!-- 轮播图下方图片导航 -->
    <el-row>
        <el-col :span="7">
            <router-link :to="{name:'index'}">
                <div class="m-life-hotel"></div>
            </router-link>
        </el-col>
        <el-col :span="7">
            <router-link :to="{name:'index'}">
                <div class="m-life-music"></div>
            </router-link>
        </el-col>
        <el-col :span="4">
            <router-link :to="{name:'index'}">
                <div class="m-life-coop"></div>
        </router-link>
        </el-col>
        <el-col :span="6">
            <div class="m-life-downapp">
                <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
                <p>手机版</p>
                <p class="last-p">
                    <span>1元起</span>
                    吃喝玩乐
                </p>
            </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from './silder.vue'
export default {
  components: {
    Slider
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
