var express = require('express');
var router = express.Router();
var request = require('request-promise');
var cheerio = require('cheerio');
var queries = require('../../../db/queries')
var colors = require('colors');

// var cheerioAdv = require('cheerio-advanced-selectors')
var urlIdArr = [];
var rejectArr =[];
var urlId = 77823
var url = 'http://products.peapod.com/'+urlId+'.html'

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // var cycleRequest = function (url){

  //   request(url)
  //     .then(function(html) {
    var scrape = function (html) {
        var $ = cheerio.load(html.__body);
        var img, name, size, upc, pageUrl;
        var data = $('.TEXT02').parent() ;

        for (var j = 0; j < data.length; j++) {
          newData = data.eq(j)

          img = newData.children().eq(0).children().eq(0).attr('href')
          name = newData.children().first().next().text(); 
          size = newData.children().first().next().next().text(); 
          upc = newData.children().first().next().next().next().next().text().trim(); 
          pageUrl = html.req.path;

          queries.addGroceries(img,name,size,upc,pageUrl) 
            .then(function (upc) {
              // console.log('j',j);
              console.log('done: '.bgBlue, upc[0].toString().bgBlue);
            })
            .catch(function (err) {
              console.log(err.detail.slice(11,21).bgYellow.black,' :upc already in db'.bgYellow.black);
            });
        }
      }
      // .catch(function(err){
      var scrapeErr = function (err) {
        // console.log('error msg: ',err.response.req.path)
        // rejectArr.push('this is i: ',i);
        // console.log('rejectArr.length:', rejectArr.length);
        // console.log(rejectArr);
        var url = err.response.req.path

        queries.rejectedUrls(url)
          .then(function () {
            console.log('rejectd: '.bgWhite.black, url.toString().byWhite.black);
          })
          .catch(function () {
            console.log('rejected url already in db'.bgRed);
          })
      };
  // }

  // cycleRequest(url);

  var promiseArr = [];
  
  
  // uri: 'http://products.peapod.com/7732'+i+'.html',

  for (var i = 77823 ; i < 77833; i++) {
    var options = {
      uri: 'http://products.peapod.com/'+i+'.html',
      transform: function(body, response) {
        response.__body = body
        return response
      }
    };
    promiseArr.push(request(options)
      .then(function(html){
        // console.log(data.Title + ' : ' + data.imdbID);
        scrape(html);
        // console.log('response should show up.')
        // console.log(html.req.path);
        // console.log(html.__body);
        // console.log('i',i);
      })
      .catch(function(err){
        // console.log('There was an error: ',err)
        scrapeErr(err);
      })
    );
  }
  console.log(promiseArr);
  // console.log(rejectArr);
});


module.exports = router;
