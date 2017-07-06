<template>
  <ul class="top-tab">
    <li class="tab-item active"><router-link to="/">个性推荐</router-link></li>
    <li class="tab-item"><router-link to="/songsheet">歌单</router-link></li>
    <li class="tab-item"><router-link to="/ranking" >排行榜</router-link></li>
  </ul>
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
.top-tab {
  width: 100%;
  -webkit-column-count: 3;  
  -webkit-column-gap: 10/@rem;
  -moz-column-count: 3;  
  -moz-column-gap: 10/@rem;
  position: fixed;
  left: 0;
  top: 0;
  .tab-item{
    line-height: 60/@rem;
    text-align: center;
    margin: 0 20/@rem;
    border-bottom: 2px solid #26272b;
    a{
      display: block;
      color: #999;
    }
    &.active{
      color: #d00d0d;
      border-color: #d00d0d;
      a {
        color: #d00d0d;
      }
    }
  }
}
.banner {
  width: 100%;
  margin-top: 62/@rem;
  margin-bottom: 30/@rem;
  overflow: hidden;
  img {
    max-width: 100%;
  }
}
.title{
  line-height: 35/@rem;
  font-weight: 300; 
  text-indent: 20/@rem;
  position: relative;
  margin: 15/@rem 0;
  &:after {
    content: '';
    height: 35/@rem;
    border-left: 2px solid #d00d0d;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.newsong-list {
  ul {
    margin: 0 10/@rem;
    display: block;
    li {
      width: 100%;
      height: 60/@rem;
      display:flex;
      flex-direction: row;
      justify-content: space-around;
      align-items:baseline;
      align-content: space-between;
      div {
        height: 100%;
      }
      .max {
        flex: 5;
        .name {

        }
        .des {
          font-size: 16/@rem;
        }
      }
      .min {
        flex: 1;
      }
    }
  }
}
</style>
