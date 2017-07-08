<template>
  <div class="font22">
    <main-top></main-top>
    <div class="song-top sizing">
      <div class="song-back"><img src="../../images/song/01.jpg" /></div>
      <div class="song-banner">
        <div class="left">
          <img src="../../images/song/01.jpg" />
        </div>
        <div class="right">
          <p class="font30">[年代感] 欧美原声吉他弹唱精选100首</p>
        </div>
      </div>
      <div class="song-oper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import mainTop from '../../components/header/head'
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
.song-top {
  width: 100%;
  height: 450/@rem;
  padding: 0 10/@rem;
  position: relative;
  padding-top: 130/@rem;
  overflow: hidden;
  .song-back {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      webkit-filter: blur(6px); /* Chrome, Opera */
      -moz-filter: blur(60px);
      -ms-filter: blur(60px);    
      filter: blur(60px);
    }
  }
  .song-banner {
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 1;
    .left {
      flex: 2;
    }
    .right {
      flex: 4;
      .font30 {
        color: #f0f0f0;
        font-size: 30/@rem;
        padding-top: 20/@rem;
      }
    }
  }
  .song-oper {
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 1;
    div {
      flex: 1;
    }
  }
}
</style>
