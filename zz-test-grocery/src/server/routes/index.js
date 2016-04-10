var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
// var cheerioAdv = require('cheerio-advanced-selectors')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // request('http://www.omdbapi.com/?s=gun', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body) // Show the HTML for the Google homepage. 
  //   }
  // });
  request('http://products.peapod.com/77823.html', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      // cheerio = cheerioAdv.wrap(cheerio)
      var $ = cheerio.load(html);
      var img, name, size, rating;
      var json = { img : "", name : "", size : "", upc: ""};

      // $('.TEXT02').filter(function () {
      //   var data = $(this);

      //   // img = data.parent().parent().children().first().next().next().next();

      //   data.first()

      //   console.log(data.first().text());
      // });
   
  var arr = [];
  var data = $('.TEXT02').parent() ;

  for (var i = 0; i < data.length; i++) {
    newData = data.eq(i)

    var groceryObj = {};

    groceryObj.name = newData.children().first().next().text(); 
    groceryObj.size = newData.children().first().next().next().text(); 
    groceryObj.upc = newData.children().first().next().next().next().next().text().trim(); 
    arr.push(groceryObj);
  }

  console.log(arr);


    }
  });

});

function function_name (argument) {
  // body...
}

module.exports = router;
