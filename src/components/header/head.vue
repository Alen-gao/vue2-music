<template>
  <div class="header sizing">
    <div class="left iconfont">&#xe607;</div>
    <div class="center"> 歌单 </div>
    <div class="right iconfont">&#xe67e;</div>
  </div>
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
.font22 {
  font-size: 22/@rem;
}
.font20 {
  font-size: 20/@rem;
}
.font18 {
  font-size: 18/@rem;
}
.header {
  width: 100%;
  height: 80/@rem;
  line-height: 80/@rem;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:baseline;
  align-content: space-between;
  padding: 0 10/@rem;
  background-color: rgba(38, 37, 41, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  .left{
    flex: 1;
    text-align: left;
  }
  .center{
    flex: 6;
    text-align: center;
  }
  .right{
    flex: 1;
    text-align: right;
  }
}
</style>
