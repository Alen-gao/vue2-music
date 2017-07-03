<template>
  <div>
    <nav-top ></nav-top>
    <ul>
      <li>个性推荐</li>
      <li>歌单</li>
      <li>排行榜</li>
    </ul>
  </div>
</template>

<script>
import navTop from '../../components/header/head'
export default {
  components:{
    navTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-tab {
  width: 100%;
}
</style>
