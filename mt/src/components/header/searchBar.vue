<template>
  <!-- 头部模板下半部分 -->
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <!-- log图标 -->
      <el-col :sapn="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
          alt="美团"
        />
      </el-col>

      <!-- 搜索框部分 -->
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="inputFocus" @blur="inputBlur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>

          <dl class="hotPlace" v-if="ishotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(itme,index) in hotPlace" :key="index+'_'+itme">
              <router-link  :to="{name: 'goodList',params: {name: itme}}">{{itme}}</router-link>
            </dd>
          </dl>

          <dl class="searchList" v-if="issearchList">
            <dd v-for="(itme,index) in searchList" :key="index">
               <router-link :to="{name: 'goodList',params: {name: itme}}">{{itme}}</router-link>
            </dd>
          </dl>
        </div>

        <p class="suggest">
          <router-link  v-for="(itme,index) in suggestList" :key="index" :to="{name: 'goodList',params: {name: itme}}">{{itme}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '../api/index.js'
export default {
  // 数据
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlace: [],
      searchList: [],
      suggestList: []
    }
  },

  // 计算属性
  computed: {
    ishotPlace () {
      return !this.searchWord && this.isFocus
    },
    issearchList () {
      return this.searchWord && this.isFocus
    }
  },

  // 函数方法
  methods: {
    inputFocus () {
      this.isFocus = true
    },
    inputBlur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {
      let val = this.searchWord
      api.getSearchList().then((res) => {
        this.searchList = res.data.data.list.filter((itme, index) => {
          return itme.indexOf(val) > -1
        })
      })
    }
  },
  watch: {
    '$route.params.name': function () {
      this.searchWord = this.$route.params.name
    }
  },
  created () {
    api.searchHotWords().then(res => {
      this.hotPlace = res.data.data
      this.suggestList = res.data.data
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
