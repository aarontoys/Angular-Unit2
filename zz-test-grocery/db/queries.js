var knex = require('./knex');
var Groceries = function() { return knex('groceries');};

module.exports = {
    addGroceries: function(img, name, size, upc, pageurl) {
      return Groceries().insert({
        img: img,
        name: name,
        size: size,
        upc: upc,
        pageurl: pageurl
      })
    }
}