<template>
  <div class="main font22">
    <main-top></main-top>
      <div class="song-play">
        <div class="song-needle"><img src="../../images/song/needle-plus.png" /></div>
        <div class="song-back"><img src="../../images/song/01.jpg" /></div>
        <div class="song-disc" id="play">
          <div class="song-default"><img src="../../images/song/disc_default.png"></div>
          <div class="song-img"><img src="../../images/song/play-img.jpg" /></div>
          <div class="song-rotate"><img src="../../images/song/disc.png" /></div>
        </div>
      </div>
      <div class="song-handle sizing">
        <div class="share">
          <div>
            <span class="iconfont">&#xe610;</span>
          </div>
          <div>
            <span class="iconfont">&#xe601;</span>
          </div>
          <div>
            <span class="iconfont">&#xe69c;</span>
          </div>
          <div>
            <span class="iconfont">&#xe602;</span>
          </div>
        </div>
        <div class="speed">
          <div class="play-time">00:00</div>
          <div class="play-rate">
            <span class="rate-line"></span>
            <span class="rata-radius"></span>
          </div>
          <div class="total-time">00:00</div>
        </div>
        <div class="operation">
          <div class="pattern iconfont">&#xe612;</div>
          <div class="backoff iconfont">&#xe604;</div>
          <div class="suspend iconfont" @click="play()">&#xe663;</div>
          <div class="forward iconfont">&#xe609;</div>
          <div class="choice iconfont">&#xe628;</div>
        </div>
      </div>
    </div>
</template>

<script>
import mainTop from '../../components/header/head'
import init from '../../plugins/init.js'
export default {
  data(){
    return {
      flag: true
    }
  },
  components:{
    mainTop
  },
  methods: {
    async play(){
      if(this.flag){  
          // music.pause();
          this.flag = false;  
          document.getElementById('play').style.webkitAnimationPlayState = "paused";  //旋转动画暂停  
      }else{  
          // music.play(); 
          this.flag = true;  
          document.getElementById('play').style.webkitAnimationPlayState = "running";  //旋转动画暂停  
      } 
    }
  },
  async loadsong(){
    let url = 'http://music.163.com/#/song?id='+this.$route.query.sid;
      this.$http.post(this.Env.server+'/plays', {url:url}, {emulateJSON:true}).then((res)=>{
        console.log(res.body);
      }, (res)=> {
        console.log(res.status);
      });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@rem: 40rem;
.song-play {
  max-width: 640/@rem;
  margin: 0 auto;
  padding-top: 80/@rem;
  .song-needle {
    width: 180/@rem;
    height: 0px;
    position: absolute;
    top: 80/@rem;
    left: 50%;
    z-index: 20;
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
  .song-disc {
    width: 500/@rem;
    height: 500/@rem;
    margin: 0 auto;
    margin-top: 120/@rem;
    border-radius: 500/@rem;
    position: relative;
    z-index: 2;
    webkit-animation: music_disc 20s linear infinite;  
    animation: music_disc 20s linear infinite;  
    img {
      max-width: 100%;
    }
    div {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    .song-default{
      width: 480/@rem;
      height: 480/@rem;
      top: 50%;
      left: 50%;
      margin-left: -240/@rem;
      margin-top: -240/@rem;
      img {
        overflow: hidden;
        border-radius: 360/@rem;
      }
    }
    .song-img {
      width: 360/@rem;
      height: 360/@rem;
      top: 50%;
      left: 50%;
      overflow: hidden;
      border-radius: 360/@rem;
      margin-left: -180/@rem;
      margin-top: -180/@rem;
      
    }
    .song-rotate {
      z-index: 5;
    }
  }
}
.song-handle {
  width: 100%;
  padding: 0 10/@rem;
  position: absolute;
  left: 0;
  bottom: 20/@rem;
  z-index: 5;
  .share{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
    padding-top: 20/@rem;
    padding-bottom: 20/@rem;
    div {
      flex: 1;
      text-align: center;
    }
  }
  .speed {
    font-size: 12/@rem;
    padding: 20/@rem 0;
    line-height: 20/@rem;
    display: flex;
    flex-direction: row;
    .play-time{
      flex: 1;
      color: #999;
    }
    .play-rate{
      flex: 5;
      height: 2px;
      position: relative;
      margin-top: 8/@rem;
      background-color: #222;
      .rate-line {
        width: 50%;
        height: 2px;
        position: absolute;
        left: 0;
        background-color: #cc3b3b;
      }
      .rata-radius {
        width: 30/@rem;
        height: 30/@rem;
        border-radius: 30/@rem;
        background-color: #FFF;
        position: absolute;
        top: -15/@rem;
        left: 50%;
      }
    }
    .total-time{
      flex: 1;
      color: #444;
      text-align: right;
    }
  }
  .operation{
    display: flex;
    flex-direction: row;
    div {
      flex: 1;
      line-height: 80/@rem;
    }
    .pattern{

    }
    .backoff{
      font-weight: 100;
      text-align: center;
    }
    .suspend{
      font-size: 50/@rem;
      text-align: center;
    }
    .forward{
      font-weight: 100;
      text-align: center;
    }
    .choice{
      text-align: right;
    }
  }

}
@-webkit-keyframes music_disc {  
  0% {  
    -webkit-transform: rotate(0deg); 
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }  
  100% {  
    -webkit-transform: rotate(360deg);  
    -ms-transform: rotate(360deg);  
    -o-transform: rotate(360deg);  
    transform: rotate(360deg);
  }  
}  
</style>
