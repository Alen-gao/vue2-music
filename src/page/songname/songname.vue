<template>
  <div class="font22">
    <main-top></main-top>
    <div class="song-top sizing">
      <div class="song-back" v-bind:style="{'background-image':'url('+songinfor.maximg+')'}"><div class="back-img" ></div></div>
      <div class="song-banner">
        <div class="left">

          <img v-bind:src="songinfor.minimg" />
        </div>
        <div class="right">
          <p class="font26">{{songinfor.title}}</p>
          <p class="font18">{{userinfor.name}}</p>
          <p class="font18">{{userinfor.time}}</p>
        </div>
      </div>
      <div class="song-oper">
        <div>
          <p class="iconfont">&#xe6c0;</p>
          <span>{{songinfor.number}}</span>
        </div>
        <div>
          <p class="iconfont">&#xe69c;</p>
          <span>{{songinfor.message}}</span>
        </div>
        <div>
          <p class="iconfont">&#xe67e;</p>
          <span>{{songinfor.share}}</span>
        </div>
        <div>
          <p class="iconfont">&#xe601;</p>
          <span>{{songinfor.download}}</span>
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
            <span class="iconfont">&#xe663;</span>
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
            <span class="iconfont">&#xe663;</span>
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
            <span class="iconfont">&#xe663;</span>
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
  data(){
    return {
      playlist:[],
      songinfor:{},
      userinfor:{}
    }
  },
  components:{
    mainTop
  },
  mounted(){ 
    this.GetSongList();
  },
  methods:{
    async GetSongList(){
      let url = 'http://music.163.com/#/playlist?id='+this.$route.query.sid;
      this.$http.post(this.Env.server+'/playlist', {url:url}, {emulateJSON:true}).then((res)=>{
        console.log(res.body);
        if (res.body.code) {
          this.playlist = res.body.data.playlist;
          this.songinfor = res.body.data.songinfor;
          this.userinfor = res.body.data.userinfor;
        }
      }, (res)=> {
        console.log(res.status);
      });
    }
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
    background-size: 100%;
    webkit-filter: blur(20px); /* Chrome, Opera */
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);    
    filter: blur(20px);
    .back-img{
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      
    }
  }
  .song-banner {
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 1;
    .left {
      flex: 2;
      img {
        max-width: 100%;
      }
    }
    .right {
      flex: 4;
      padding-left: 20/@rem;
      p {
        margin-bottom: 10/@rem;
      }
      .font26 {
        color: #f0f0f0;
        font-size: 26/@rem;
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
