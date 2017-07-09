<template>
  <ul class="top-tab">
    <li class="tab-item active"><router-link to="/">个性推荐</router-link></li>
    <li class="tab-item"><router-link to="/songlist">歌单</router-link></li>
    <li class="tab-item"><router-link to="/search" >搜素</router-link></li>
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
.font22 {
  font-size: 22/@rem;
}
.font20 {
  font-size: 20/@rem;
}
.font18 {
  font-size: 18/@rem;
}
.top-tab {
  width: 100%;
  height: 80/@rem;
  line-height: 80/@rem;
  -webkit-column-count: 3;  
  -webkit-column-gap: 10/@rem;
  -moz-column-count: 3;  
  -moz-column-gap: 10/@rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #1e1d20;
  .tab-item{
    text-align: center;
    margin: 0 20/@rem;
    position: relative;
    a{
      display: block;
      color: #999;
    }
    &.active{
      color: #b62e2c;
      a {
        color: #d00d0d;
        &:after {
          content: '';
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0px;
          left: 0;
          background-color: #b62e2c;
        }
      }
    }
  }
}
.banner {
  width: 100%;
  margin-top: 60/@rem;
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
      display:flex;
      flex-direction: row;
      justify-content: space-around;
      align-items:baseline;
      align-content: space-between;
      border-bottom: 1px solid #333;
      padding: 10/@rem 0;
      overflow: hidden;
      div {
        height: 100%;
      } 
      .max {
        flex: 5;
        .name {
          line-height: 24/@rem;
        }
        .des {
          color: #666;
          font-size: 18/@rem;
          line-height: 20/@rem;
        }
      }
      .min {
        flex: 1;
        span {
          display: inline-block;
        }
      }
    }
  }
}
</style>
