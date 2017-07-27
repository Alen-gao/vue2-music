<template>
  <div class="font22">
    <div class="banner">
      <img src="../../images/banner01.jpg">
    </div>
    <div class="song-sheet">
      <h3 class="title">推荐歌单</h3>
      <ul class="list">
        <li>
          <img src="../../images/song/01.jpg">
          <p>黄家驹专辑</p>
        </li>
        <li>
          <img src="../../images/song/02.jpg">
          <p>周杰伦专辑</p>
        </li>
        <li>
          <img src="../../images/song/03.jpg">
          <p>刘德华专辑</p>
        </li>
        <li>
          <img src="../../images/song/04.jpg">
          <p>林俊杰专辑</p>
        </li>
        <li>
          <img src="../../images/song/05.jpg">
          <p>许巍专辑</p>
        </li>
        <li>
          <img src="../../images/song/06.jpg">
          <p>FIR专辑</p>
        </li>

      </ul>
    </div>
    <div class="newsong-list">
      <h3 class="title">最新音乐</h3>
      <ul>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span class="des">Allen gao</span>
          </div>
          <div class="min"><span class="iconfont">&#xe663;</span></div>
        </li>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span class="des">Allen gao</span>
          </div>
          <div class="min"><span>播放</span></div>
        </li>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span class="des">Allen gao</span>
          </div>
          <div class="min"><span>播放</span></div>
        </li>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span class="des">Allen gao</span>
          </div>
          <div class="min"><span>播放</span></div>
        </li>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span class="des">Allen gao</span>
          </div>
          <div class="min"><span>播放</span></div>
        </li>
        <li>
          <div class="max">
            <p class="name">在希望的田野上</p>
            <span class="des">Allen gao</span>
          </div>
          <div class="min"><span>播放</span></div>
        </li>
      </ul>
    </div>
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
.song-sheet {
  width: 100%;
  .list {
    margin-top: 10/@rem;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    -webkit-column-gap: 5/@rem;
    -moz-column-gap: 5/@rem;
    li, img {
      width: 100%;
    }
    p{
      font-size: 20/@rem;
      height: 60/@rem;
      padding: 0 10/@rem;
      line-height: 40/@rem;
    }
  }
}
</style>
