app.service('shoppingService', function () {
  var cartItems = [];

  return {
    addToCart: function (item, qty) {
      item.qty = parseInt(qty) || 1;
      cartItems.push(item)
    },
    getCartItems: function () {
      return cartItems;
    },
    saveItem: function (item, qty) {
      var filtered = cartItems.filter(function (el) {
        console.log('before return')
        return item._id === el._id;
      });  
      filtered[0].qty = qty;
    },
    removeItem: function (item) {
      console.log('cartItems:',cartItems);
      var removeIndex = cartItems.map(function (el) {
        return el._id; 
      }).indexOf(item._id);
      console.log(removeIndex);
      console.log(!!~removeIndex);
      ~removeIndex && cartItems.splice(removeIndex, 1);
    }

  }

});