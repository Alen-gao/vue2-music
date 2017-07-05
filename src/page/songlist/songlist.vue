<template>
  <div class="font24">
    
  </div>
</template>

<script>
import navTop from '../../components/header/head'
import init from '../../plugins/init.js'
export default {
  components:{
    navTop
  }
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
}
.top-tab .tab-item{
  line-height: 60/@rem;
  text-align: center;
  margin: 0 20/@rem;
  border-bottom: 2px solid #26272b;
}
.top-tab .tab-item.active{
  color: #d00d0d;
  border-color: #d00d0d;
}
.banner {
  margin-bottom: 20/@rem;
  width: 100%;
}
.banner img {
  max-width: 100%;
}
.song-sheet {
  width: 100%;
}
.song-sheet .title{
  line-height: 35/@rem;
  font-weight: 300; 
  text-indent: 20/@rem;
  position: relative;
}
.song-sheet .title:after {
  content: '';
  height: 35/@rem;
  border-left: 2px solid #d00d0d;
  position: absolute;
  top: 0;
  left: 10/@rem;
}
.song-sheet .list {
  margin-top: 10/@rem;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  -webkit-column-gap: 5/@rem;
  -moz-column-gap: 5/@rem;
}
.song-sheet .list li, .song-sheet .list img{
  width: 100%;
}
.song-sheet .list p{
  height: 60/@rem;
  padding: 0 10/@rem;
  line-height: 40/@rem;
}
</style>
