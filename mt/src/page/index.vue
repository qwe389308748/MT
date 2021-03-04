<template lang="">
  <!-- 首页模板 -->
  <div class="page-index">
    <el-row>
      <!-- 左侧导航栏 -->
      <el-col :span="5">
        <MMenu />
      </el-col>
      <!-- 右侧轮播内容以及导航图片 -->
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <!-- 首页推荐 -->
    <el-row>
      <el-col :span="24">
        <Container :nav="ls"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <Container :nav="hyh"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from '@/components/index/menu.vue'
import Life from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
  data () {
    return {
      ls: {
        tit: '有格调',
        list: [
          {
            text: '全部',
            data_type: 'all'
          }, {
            text: '美食',
            data_type: 'food'
          }, {
            text: '丽人spa',
            data_type: 'spa'
          }, {
            text: '电影演出',
            data_type: 'movie'
          }, {
            text: '品质出游',
            data_type: 'travel'
          }
        ]
      },
      hyh: {
        class: 'youhui',
        tit: '很优惠',
        list: [
          {
            text: '全部',
            data_type: 'all'
          }, {
            text: '美食',
            data_type: 'food'
          }, {
            text: '丽人spa',
            data_type: 'spa'
          }, {
            text: '电影演出',
            data_type: 'movie'
          }, {
            text: '品质出游',
            data_type: 'travel'
          }, {
            text: '很优惠',
            data_type: 'youhui'
          }
        ]
      }
    }
  },
  components: {
    MMenu,
    Life,
    Container
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
