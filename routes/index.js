var express = require('express');
var nodegrass = require('nodegrass');
const axios = require('axios');
var request = require('request');
var Promise = require('bluebird') 
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
		var itemUrl = [], newsong = [];
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
		$('.n-bilst').find('.blk').eq(1).find('ol').find('li').each(function(inex, item){
			var obj = {};
			obj.name = $(item).children('a').text();
			obj.url = $(item).children('a').attr('href');
			obj.sid = $(item).find('.oper').find('.s-bg').data('res-id');
			newsong.push(obj);
		});
		res.send({code:1, data:{message:'加载成功！', banner:banner, result:itemUrl, newsong:newsong}});
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

router.post('/playlist', function(req, res, next){
	var url = req.body.url;

	nodegrass.get(url, function(data,status,headers){

		var $ = cheerio.load(data);
		var playlist = [], songinfor= {}, userinfor= {};
		songinfor.maximg = $('.m-info').find('.u-cover-dj').find('img').data('src');
		songinfor.minimg = $('.m-info').find('.u-cover-dj').find('img').attr('src');
		songinfor.title = $('.m-info').find('.cnt').find('.tit').find('.f-ff2').text();
		songinfor.describe = $('.m-info').find('.album-desc-dot').text();
		songinfor.number = $('.m-info').find('#content-operation').find('.u-btni-fav>i').text();
		songinfor.message = $('.m-info').find('#content-operation').find('.u-btni-cmmt>i').text();
		songinfor.download = $('.m-info').find('#content-operation').find('.u-btni-dl>i').text();
		songinfor.share = $('.m-info').find('#content-operation').find('.u-btni-share>i').text();
		userinfor.img = $('.m-info').find('.user').find('.face>img').attr('src');
		userinfor.userurl = $('.m-info').find('.user').find('.name>a').attr('href');
		userinfor.name = $('.m-info').find('.user').find('.name>a').text();
		userinfor.time = $('.m-info').find('.user').find('.time').text();

		console.log('m-info', $('.m-info').length);
		console.log('n-songtb', $('.n-songtb').length);
		console.log('m-table', $('.m-table').length);

		$('.m-table').each(function(index, item){
		  // var obj = {};
		  // obj.resid = $(this).find('.left').find('.ply').data('res-id');
		  // obj.sid = $(this).find('.left').find('.ply').data('res-data');
		  // obj.url = $(this).find('.f-cb').find('.ttc').find('a').attr('href');
		  // obj.longname = $(this).find('.f-cb').find('.ttc').find('a>b').attr('title');
		  // obj.name = $(this).find('.f-cb').find('.ttc').find('a>b').text();
		  // obj.time = $(this).find('.s-fc3').find('.u-dur').text();
		  // obj.authorurl = $(this).find('td').eq(3).find('a').attr('href');
		  // obj.author = $(this).find('td').eq(3).find('a').text();
		  // obj.albumurl = $(this).find('td').eq(4).find('a').attr('href');
		  // obj.album = $(this).find('td').eq(4).find('a').text();
		  // playli.push(obj);
		});
		res.send({code:1, data:{message:'加载成功！', songinfor:songinfor, userinfor:userinfor,playlist:playlist }});

	},'utf-8').on('error', function(e) {
    console.log("Got error: " + e.message);
	});

});


router.post('plays', function(req, res, next) {

	var url = req.body.url;

	nodegrass.get(url, function(data,status,headers){

		var $ = cheerio.load(data);
		res.send({code: 1, data:{message:'加载成功！', result:'123'}})

	},'utf-8').on('error', function(e) {
    console.log("Got error: " + e.message);
	});
		
});

module.exports = router;
