<template>
  <div class="font22">
    <div><main-top></main-top></div>
    <div class="banner">
      <img v-bind:src="banner">
    </div>
    <div class="song-sheet">
      <h3 class="title">推荐歌单</h3>
      <ul class="list">
        <li v-for="item in songsheet">
          <router-link :to="{path:'/songname', query: {id: item._id}}">
            <img v-bind:src="item.img">
            <p>{{item.name}}</p>
          </router-link>
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
import mainTop from '../../components/header/mainhead'
import init from '../../plugins/init.js'
export default {
  data(){
    return {
      banner:'',
      songsheet:[]
    }
  },
  components:{
    mainTop
  },
  mounted(){
    this.GetSongSheet();
  },
  methods:{
    async GetSongSheet(){
      this.$http.post(this.Env.server+'/songsheet', {url:'http://music.163.com/#/discover'}, {emulateJSON:true}).then((res)=>{
        if (res.body.code) {
          this.banner = res.body.data.banner;
          this.songsheet = res.body.data.result;
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
    li {
      margin-bottom: 20/@rem;
    }
    p{
      font-size: 20/@rem;
      height: 60/@rem;
      padding: 0 10/@rem;
      line-height: 30/@rem;
      overflow: hidden;
    }
  }
}
</style>
