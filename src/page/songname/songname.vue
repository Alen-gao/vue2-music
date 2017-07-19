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
        <div>
          <p class="iconfont">&#xe6c0;</p>
          <span>224</span>
        </div>
        <div>
          <p class="iconfont">&#xe69c;</p>
          <span>20</span>
        </div>
        <div>
          <p class="iconfont">&#xe67e;</p>
          <span>5</span>
        </div>
        <div>
          <p class="iconfont">&#xe601;</p>
          <span>下载</span>
        </div>
      </div>
    </div>
    <div class="song-bottom">
      <h3><span>播放</span><span>播放全部</span><span class="font18">(共29首)</span> <div class="fr"><span class="iconfont">&#xe600;</span>多选</div></h3>
      <ul class="song-class-list">
        <li><router-link  to="songplay">
          <div class="left">
            1
          </div>
          <div class="center">
            <p class="name">小永远</p>
            <span class="des">何洁 - 短暂的爱情</span>
          </div>
          <div class="right">
            <span class="iconfont">&#xe614;</span>
          </div></router-link>
        </li>
        <li><router-link  to="songplay">
          <div class="left">
            2
          </div>
          <div class="center">
            <p class="name">此生不换 (电视剧 《仙剑奇侠传三》)</p>
            <span class="des">青鸟飞鱼 - 仙剑奇侠传三 电视原声带</span>
          </div>
          <div class="right">
            <span class="iconfont">&#xe614;</span>
          </div></router-link>
        </li>
        <li><router-link  to="songplay">
          <div class="left">
            3
          </div>
          <div class="center">
            <p class="name">一生有你</p>
            <span class="des">水木年华 - 一生有你</span>
          </div>
          <div class="right">
            <span class="iconfont">&#xe614;</span>
          </div></router-link>
        </li>
      </ul>
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
.iconfont {
  font-size: 30/@rem;
  font-weight: normal;
}
.song-top {
  width: 100%;
  padding: 20/@rem;
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
      webkit-filter: blur(60px); /* Chrome, Opera */
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
        padding-left: 10/@rem;
      }
    }
  }
  .song-oper {
    display: flex;
    flex-direction: row;
    position: relative;
    padding-top: 20/@rem;
    z-index: 1;
    div {
      flex: 1;
      text-align: center;
    }
  }
}
.song-bottom {
  padding: 0 10/@rem;
  h3{
    line-height: 80/@rem;
    padding: 0 10/@rem;
    font-weight: normal;
    overflow: hidden;
    span {
      display: inline-block;
      padding-right: 10/@rem;
    }
    .fr {
      float: right;
    }
  }
  .song-class-list {
    display: block;
    li {
      display: block;
      a {
        display: flex;
        flex-direction: row;
      }
      .left{
        flex: 2;
        color: #464646;
        font-size: 24/@rem;
        text-align: center;
        padding: 15/@rem 0;
        line-height: 60/@rem;
      }
      .center{
        flex: 10;
        padding: 15/@rem 0;
        border-top: 1px solid #2d2d2d;
        .name {
          font-size: 24/@rem;
          line-height: 30/@rem;
        }
        .des {
          color: #464646;
          font-size: 18/@rem;
          line-height: 20/@rem;
        }
      }
      .right{
        flex: 3;
        padding: 15/@rem 0;
        text-align: right;
        line-height: 60/@rem;
        border-top: 1px solid #2d2d2d;
      }
    }
  }
}
</style>
