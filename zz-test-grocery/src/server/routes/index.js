var express = require('express');
var router = express.Router();
var request = require('request-promise');
var cheerio = require('cheerio');
var queries = require('../../../db/queries')
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
    var scrape = function (html, i) {
        var $ = cheerio.load(html);
        var img, name, size, upc, pageUrl;
        var data = $('.TEXT02').parent() ;

        for (var j = 0; j < data.length; j++) {
          newData = data.eq(j)

          img = newData.children().eq(0).children().eq(0).attr('href')
          name = newData.children().first().next().text(); 
          size = newData.children().first().next().next().text(); 
          upc = newData.children().first().next().next().next().next().text().trim(); 
          pageUrl = i;

          queries.addGroceries(img,name,size,upc,pageUrl) 
            .then(function () {
              console.log('done');
            })
            .catch(function () {
              console.log('upc already in db');
            });
        }
      }
      // .catch(function(err){
      var scrapeErr = function (err, i) {
        rejectArr.push(i);
        console.log('rejectArr.length:', rejectArr.length);
        console.log(rejectArr);
      };
  // }

  // cycleRequest(url);

  var promiseArr = [];
  
  // uri: 'http://products.peapod.com/7732'+i+'.html',

  for (var i = 10; i < 20; i++) {
    var options = {
      uri: 'http://products.peapod.com/7732'+i+'.html',
    };
    promiseArr.push(request(options)
      .then(function(html, i){
        // console.log(data.Title + ' : ' + data.imdbID);
        scrape(html);
      })
      .catch(function(err, i){
        // console.log('There was an error: ',err)
        scrapeErr(err);
      })
    );
  }
  console.log(promiseArr);
  // console.log(rejectArr);
});


module.exports = router;
