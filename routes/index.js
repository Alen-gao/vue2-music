var express = require('express');
var nodegrass = require('nodegrass');
const axios = require('axios');
var cheerio = require('cheerio');
var router = express.Router();

var server = 'http://music.163.com/';

router.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/songsheet', function(req, res, next) {
	var url = req.body.url;
	nodegrass.get(url, function(data,status,headers){
		var $ = cheerio.load(data);
		var itemUrl = [];
		var banner = $('.n-ban').find('.ban').find('img').attr('src');
		$('.m-cvrlst').find('li').each(function(index, item){
			if (index<6) {
				var obj = {};
				obj.sid = $(item).find('.u-cover>a').data('res-id');
				obj.name = $(item).find('.u-cover>a').attr('title');
				obj.href = $(item).find('.u-cover>a').attr('href');
				obj.img = $(item).find('.u-cover>img').attr('src');
				obj.number = $(item).find('.u-cover').find('.nb').text();
				itemUrl.push(obj);
			}
		});
		res.send({code:1, data:{message:'加载成功！', banner:banner, result:itemUrl}});
	},'utf-8').on('error', function(e) {
    console.log("Got error: " + e.message);
	});
});

router.post('/songlist', function(req, res, next) {
	var url = req.body.url;
  nodegrass.get(url, function(data,status,headers){

		var $ = cheerio.load(data);
		var itemUrl = [];
		var banner = $('.n-ban').find('.ban').find('img').attr('src');

		$('.m-cvrlst').find('li').each(function(index, item){
			var obj = {}
			obj.sid = $(item).find('.u-cover').find('.icon-play').data('res-id');
			obj.name = $(item).find('.dec').find('.f-thide').text();
			obj.href = $(item).find('.u-cover').find('.msk').attr('href');
			obj.img = $(item).find('.u-cover').find('.j-flag').attr('src');
			obj.number = $(item).find('.u-cover').find('.nb').text();
			obj.author = 'by ' + $(item).find('.f-thide.s-fc3').text();
			itemUrl.push(obj);
		});

		res.send({code:1, data:{message:'加载成功！', banner:banner, result:itemUrl}});

	},'utf-8').on('error', function(e) {

    console.log("Got error: " + e.message);

	});
});

router.post('/search', function(req, res, next) {
  
});

module.exports = router;
