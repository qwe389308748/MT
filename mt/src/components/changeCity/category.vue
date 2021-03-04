<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(itme, index) in list" :key="index">
        <a :href="'#city-' + itme">{{ itme }}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(itme,index) in cityGroup" :key="index" :id="'city-'+ index"  >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in itme" :key="city.id" @click="changeCity(city)">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from '../api/index'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      clitList: [],
      cityGroup: {}
    }
  },
  created () {
    api.getCityList().then((res) => {
      let obj = {}
      res.data.data.forEach((itme, index) => {
        if (!obj[itme.firstChar]) {
          obj[itme.firstChar] = []
        }
        obj[itme.firstChar].push(itme)
      })
      this.cityGroup = obj
    })
  },
  methods: {
    changeCity (city) {
      this.$store.dispatch('setPosition', city)
      this.$router.push({name: 'index'})
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>
