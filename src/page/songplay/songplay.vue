<template>
  <div class="font22">
    <main-top></main-top>
    <div class="song-play">
      <div class="song-needle"><img src="../../images/song/needle-plus.png" /></div>
      <div class="song-back"><img src="../../images/song/01.jpg" /></div>
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
.song-play {
  padding-top: 80/@rem;
  .song-needle {
    width: 200/@rem;
    height: 0px;
    position: absolute;
    top: 80/@rem;
    left: 50%;
    z-index: 2;
    margin-left: -30/@rem;
    img {
      max-width: 100%;
    }
  }
  .song-back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      webkit-filter: blur(60px); /* Chrome, Opera */
      -moz-filter: blur(60px);
      -ms-filter: blur(60px);    
      filter: blur(60px);
    }
  }
}
</style>
