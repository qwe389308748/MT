<template>
  <!-- 城市列表搜索框 -->
  <div>
    <span class="name">按省份选择</span>
    <Mselect
    :list="SelectList"
    title="省份"
    :value="provinces"
    :showWrapperActive="provinceActive"
    @change_active="changeProvinceActive"
    @change="changeProvince"
    wcll="province"
    />
    <Mselect
    :list="SelectCity"
    title="城市"
    :value="city"
    :showWrapperActive="cityActive"
    @change_active="changeCityActive"
    @change="changeCity"
    :disabled="cityDisabled"
    wcll="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      loading:false
    >
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>
<script>
import Mselect from './select'
import api from '../api/index'
export default {
  components: {
    Mselect
  },
  data () {
    return {
      provinces: '省份',
      city: '城市',
      SelectList: [],
      SelectCity: [],
      cityActive: false,
      provinceActive: false,
      searchWord: '',
      searchList: ['郴州', '深圳', '北京', '湖北', '广州', '郑州', '沈阳', '黑龙江', '大连'],
      cityDisabled: true
    }
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (itme) {
      this.provinces = itme.name
      this.cityDisabled = false
      this.SelectCity = itme.cityInfoList
    },
    changeCity (itme) {
      this.city = itme.name
      this.$store.dispatch('setPosition', itme)
      this.$router.push({name: 'index'})
    },
    remoteMethod (val) {
      // 请求后端接口
      console.log(val)
    }
  },
  created () {
    api.getProvinceList().then(res => {
      this.SelectList = res.data.data.map((item) => {
        item.name = item.provinceName
        return item
      })
      console.log(this.SelectList)
    })
  }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/iselect.scss';
</style>
