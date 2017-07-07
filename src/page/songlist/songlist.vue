<template>
  <div class="font22">
    <main-top></main-top>
    <div class="banner">
      <img src="../../images/banner01.jpg">
    </div>
    <div class="song-list">
      <h3 class="title">
        <div class="song-class">民谣 > </div>
        <div class="fr font18">
          <span>欧美</span>
          <span>摇滚</span>
          <span>民谣</span>
        </div>
      </h3>
      <ul>
        <li>
          <div class="song-list-img"><img src="../../images/song/01.jpg"></div>
          <p>想和男朋友一起分享的女声想和男朋友一起分享的女声</p>
        </li>
        <li>
          <div class="song-list-img"><img src="../../images/song/02.jpg"></div>
          <p>想和男朋友一起分享的女声</p>
        </li>
        <li>
          <div class="song-list-img"><img src="../../images/song/03.jpg"></div>
          <p>想和男朋友一起分享的女声</p>
        </li>
        <li>
          <div class="song-list-img"><img src="../../images/song/04.jpg"></div>
          <p>想和男朋友一起分享的女声</p>
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
.song-list {
  margin-top: 40/@rem;
  .title {
    text-indent: 0;
    margin: 0 15/@rem;
    &:after{
      content: normal;
    }
    .song-class{
      font-size: 22/@rem;
      text-indent: 0px;
      margin-right: 10/@rem;
      margin-bottom: 20/@rem;
      border: 1px solid #2d2d2d;
      display: inline-block;
      border-radius: 50/@rem;
      padding: 8/@rem 25/@rem;
    }
  }
  ul {
    -webkit-column-count: 2;  
    -webkit-column-gap: 5/@rem;
    -moz-column-count: 2;  
    -moz-column-gap: 5/@rem;
    li {
      .song-list-img {
        width: 100%;
        display: block;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      p {
        height: 50/@rem;
        padding: 0 5/@rem;
        line-height: 26/@rem;
        padding-bottom: 25/@rem;
      }
    }
  }
}
</style>
