<template>
  <div class="font24">
    <main-top></main-top>
    <div class="banner">
      <img src="../../images/banner01.jpg">
    </div>
    <div class="newsong-list">
      <h3 class="title">最新音乐</h3>
      <ul>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span>Allen gao</span>
          </div>
          <div class="min"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mainTop from '../../components/header/mainhead'
import init from '../../plugins/init.js'
export default {
  components:{
    mainTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@rem: 40rem;
.font24 {
  font-size: 24/@rem;
}

</style>
