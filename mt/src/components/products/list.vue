<template>
    <div class="m-products-list">
        <ul>
            <li v-for="(itme,index) in nav" :key="index" :class="{'s-nav-active': itme.active}">{{ itme.name }}</li>
        </ul>
        <el-row>
            <itte v-for="(itme,index) in productList" :key="index" :meta="itme"/>
        </el-row>
    </div>
</template>
<script>
import itte from './itme.vue'
import api from '../api/index.js'
export default {
  components: {
    itte
  },
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      productList: []
    }
  },
  created () {
    api.getProductsList().then((res) => {
      this.productList = res.data.data
    })
  }
}
</script>
