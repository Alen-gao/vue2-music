<template>
  <div class="font22">
    <main-top></main-top>
    <div class="banner">
      <img src="../../images/banner01.jpg" />
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
        <li class="sizing" v-for="item in songsheet">
          <router-link :to="{path:'/songname', query: {sid: item.sid}}">
            <div class="song-list-img"><img v-bind:src="item.img" /></div>
            <p>{{item.name}}</p>
            <p>{{item.author}}</p>
          </router-link>
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
      this.$http.post(this.Env.server+'/songlist', {url:'http://music.163.com/#/discover/playlist'}, {emulateJSON:true}).then((res)=>{
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
.song-list {
  margin-top: 20/@rem;
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
    width: 100%;
    li {
      width: 50%;
      float: left;
      margin-bottom: 20/@rem;
      &:nth-child(2n) {
        padding-left: 5/@rem;
      }
      &:nth-child(2n+1) {
        padding-right: 5/@rem;
      }
      .song-list-img {
        width: 100%;
        display: block;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 22/@rem;
        height: 30/@rem;
        overflow: hidden;
        padding: 0 5/@rem;
        line-height: 30/@rem;
        margin-bottom: 10/@rem;
      }
    }
  }
}
</style>
