<template>
  <div class="font18">
    <main-top></main-top>
  	<div class="search">
	  	<div class="search-box">
	  		<span class="search-icon iconfont">&#xe6d1;</span>
	  		<span class="search-close iconfont">&#xe6b6;</span>
	  		<input class="sizing search-val" />
	  	</div>
  	</div>
  	<div class="hot-search">
  		<p class="title">热门搜索</p>
  		<ul class="search-words">
  			<li>空</li>
  			<li>清白之年</li>
  			<li>快乐男声</li>
  			<li>太阳的后裔</li>
  			<li>Believer</li>
  			<li>追光者</li>
  			<li>中国有嘻哈</li>
  			<li>夏至未至</li>
  			<li>王者荣耀</li>
  			<li>王力宏</li>
  		</ul>
  	</div>
  	<div class="search-log">
  		<ul>
  			<li>
  				<span class="left iconfont">&#xe629;</span>
  				<span class="center">清白之年</span>
  				<span class="right">×</span>
  			</li>
  			<li>
  				<span class="left iconfont">&#xe629;</span>
  				<span class="center">李乐 漂洋过海来看你</span>
  				<span class="right">×</span>
  			</li>
  			<li>
  				<span class="left iconfont">&#xe629;</span>
  				<span class="center">李乐 漂洋过海来看你 李宗盛</span>
  				<span class="right">×</span>
  			</li>
  			<li>
  				<span class="left iconfont">&#xe629;</span>
  				<span class="center">李乐 漂洋过海来看你 (原唱李宗盛)</span>
  				<span class="right">×</span>
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
.search {
	margin: 15/@rem;
	margin-top: 60/@rem;
	.search-box {
		margin-top: 120/@rem;
		position: relative;
		.search-icon {
			font-size: 24/@rem;
			position: absolute;
			top: 12/@rem;
			left: 18/@rem;
		}
		.search-close {
			font-size: 24/@rem;
			position: absolute;
			top: 12/@rem;
			right: 18/@rem;
		}
	}
	.search-val {
		width: 100%;
		height: 50/@rem;
		border: none;
		border: 1px solid #2d2d2d;
		border-radius: 40/@rem;
		background-color: #2a292d;
		outline: none;
		padding: 0 30/@rem;
	}
}
.hot-search {
	margin: 25/@rem 15/@rem;
	margin-top: 40/@rem;
	.title{
		text-indent: 0px;
		&:after{
			content: normal;
		}
	}
	.search-words{
		display: block;
		overflow: hidden;
		li {
			float: left;
			margin-right: 10/@rem;
			margin-bottom: 20/@rem;
			border: 1px solid #2d2d2d;
			display: inline-block;
			border-radius: 50/@rem;
			padding: 10/@rem 25/@rem;
		}
	}
}
.search-log{
	margin: 25/@rem 15/@rem;
	margin-top: 40/@rem;
	ul{
		overflow: hidden;
		li {
			display: flex;
			flex-direction: row;
			padding: 10/@rem 0;
			border-bottom: 1px solid #2d2d2d;
	    span {
	    	line-height: 40/@rem;
	    }
	    .left{
	    	font-size: 30/@rem;
	    	flex: 1;
	    }
	    .center{
	    	flex: 10;
	    }
	    .right{
	    	font-size: 40/@rem;
	    	flex: 1;
	    }
		}
	}
}
</style>
