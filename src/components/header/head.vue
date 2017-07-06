<template>
  <ul class="top-tab">
    <li class="tab-item active"><router-link to="/">个性推荐</router-link></li>
    <li class="tab-item"><router-link to="/songsheet">歌单</router-link></li>
    <li class="tab-item"><router-link to="/" >排行榜</router-link></li>
  </ul>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@rem: 40rem;
.font24 {
  font-size: 24/@rem;
}
.top-tab {
  width: 100%;
  -webkit-column-count: 3;  
  -webkit-column-gap: 10/@rem;
  -moz-column-count: 3;  
  -moz-column-gap: 10/@rem;
  position: fixed;
  left: 0;
  top: 0;
  .tab-item{
    line-height: 60/@rem;
    text-align: center;
    margin: 0 20/@rem;
    border-bottom: 2px solid #26272b;
    a{
      display: block;
      color: #999;
    }
    &.active{
      color: #d00d0d;
      border-color: #d00d0d;
      a {
        color: #d00d0d;
      }
    }
  }
}
</style>
