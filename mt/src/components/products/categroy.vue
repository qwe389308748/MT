<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="itme in classicList" :key="itme.type">
        <m-select :name="itme.title" :list="itme.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="itme in areaList" :key="itme.type">
        <m-select :name="itme.title" :list="itme.sub_list" />
      </dd>
    </dl>
  </div>
</template>
<script>
import MSelect from './select.vue'
import api from '../api/index'
export default {
  data () {
    return {
      classicList: [],
      areaList: [
        {
          title: '推荐商圈',
          sub_list: [
            {
              name: '望京',

              id: 120000
            },

            {
              name: '昌平',

              id: 12222
            }
          ]
        }
      ]
    }
  },
  components: {
    MSelect
  },
  created () {
    api.getClassification().then((res) => {
      this.classicList = res.data.data
    })
  }
}
</script>
