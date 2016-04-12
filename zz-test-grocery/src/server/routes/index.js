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

  var cycleRequest = function (url){

    request(url)
      .then(function(html) {
        var $ = cheerio.load(html);
        var img, name, size, upc, pageUrl;
        var data = $('.TEXT02').parent() ;

        for (var j = 0; j < data.length; j++) {
          newData = data.eq(j)

          img = newData.children().eq(0).children().eq(0).attr('href')
          name = newData.children().first().next().text(); 
          size = newData.children().first().next().next().text(); 
          upc = newData.children().first().next().next().next().next().text().trim(); 
          pageUrl = 'tba';

          queries.addGroceries(img,name,size,upc,pageUrl) 
            .then(function () {
              console.log('done');
            })
            .catch(function () {
              console.log('upc already in db');
            });
        }
      })
      .catch(function(err){
        rejectArr.push(urlId);
        console.log('rejectArr.length:', rejectArr.length);
      });
  }

  // cycleRequest(url);

  var promiseArr = [];
  
  // uri: 'http://products.peapod.com/7732'+i+'.html',

  for (var i = 1; i < 10; i++) {
    var options = {
      uri: 'http://www.omdbapi.com/?i=tt156095'+i,
      json: true
    };
    promiseArr.push(request(options)
      .then(function(data){
        console.log(data.Title + ' : ' + data.imdbID);
      })
      .catch(function(err){
        console.log('There was an error: ',err)
      })
    );
  }
  console.log(promiseArr);
});


module.exports = router;
