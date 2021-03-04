<template>
<!-- 页面公共模板 -->
    <el-container class="layout-default">
        <el-header height="">
            <topindex />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="">
            <footerindex />
        </el-footer>
    </el-container>

</template>

<script>
import topindex from '../components/header/index'
import footerindex from '../components/footer/index'
export default {
  components: {
    topindex,
    footerindex
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>
