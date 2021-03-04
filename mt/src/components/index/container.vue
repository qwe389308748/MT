<template>
  <!-- 首页推荐模板 -->
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.tit }}</dt>
      <dd
        v-for="(itme, index) in nav.list"
        :key="index"
        :class="{ active: kind === itme.data_type }"
        :data-type="itme.data_type"
      >
        {{ itme.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(itme, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <router-link :to="{ name: 'goodList' }">
            <img :src="itme.image" class="image" />
          </router-link>
          <div class="cbody">
            <div class="title">{{ itme.title }}</div>
            <div class="sub-title">{{ itme.subTitle }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">
                  {{itme.price}}
                </span>
                <span class="sold bottom-right-info">{{ itme.address }}</span>
              </span>
              <!-- <span class="old-price">门市价{{itme.price.before_price}}</span>
              <span class="sold bottom-right-info">{{itme.address}}</span> -->
            </div>

            <!-- <div class="price-info" v-else-if="!itme.zt">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>

            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{itme.price.avg_price}}</span>
                <span class="units">/{{itme.price.units}}均</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '../api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultsData: {}
    }
  },
  props: ['nav'],
  methods: {
    over (e) {
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      // eslint-disable-next-line eqeqeq
      if (tagName != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 切换时动态获取数据
    }
  },
  created () {
    api.resultsByKeywords().then(res => {
      console.log(res)
      this.resultsData = res.data.data
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
