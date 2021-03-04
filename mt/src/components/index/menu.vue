<template lang="">
<!-- 首页左侧导航栏模板 -->
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(itme,index) in menuList" :key="index" @mouseenter="menuEnter(itme)">
              <i :class="itme.icon"></i>
              {{itme.name}}
              <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
          <template v-for="(itme,index) in curDetail.items" >
            <h4 :key="index">{{ itme.title }}</h4>
            <span v-for="(v, i) in itme.items" :key="v + '_'+ i">{{v}}</span>
          </template>
        </div>
    </div>
</template>
<script>
import api from '../api/index.js'
export default {
  // 数据参数
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  // 函数事件
  methods: {
    menuEnter (itme) {
      this.curDetail = itme
    },
    menuLeave () {
      this.timer = setTimeout(() => {
        this.curDetail = null
      }, 200)
    },
    detailEnter () {
      clearInterval(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  },
  created () {
    api.getMenuList().then(res => {
      this.menuList = res.data.data
    })
  }
}
</script>
