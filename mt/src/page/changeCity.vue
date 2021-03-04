<template>
<!-- 切换城市模板 -->
  <div class="page-changeCity">
    <!-- 搜索列表框 -->
      <el-row>
        <Province />
      </el-row>

      <el-row>
        <!-- 热门城市 -->
        <hot title="热门城市" :list="HotList" />
      </el-row>

      <el-row>
        <!-- 最近访问 -->
        <hot title="最近访问" :list="Recently"/>
      </el-row>

      <el-row>
        <!-- 根据字母搜索城市 -->
        <Category />
      </el-row>
  </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import api from '../components/api/index'
export default {
  components: {
    Province,
    hot,
    Category
  },
  data () {
    return {
      HotList: [],
      Recently: []
    }
  },
  created () {
    api.getHotCity().then(res => {
      this.HotList = res.data.data.map((item) => item.name)
    })
    api.getRecentCity().then(res => {
      this.Recently = res.data.data.map((item) => item.name)
    })
  }
}
</script>
