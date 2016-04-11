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
      console.log('before',cartItems);
      var filtered = cartItems.filter(function (el) {
        console.log('before return')
        return item._id === el._id;
      });
      console.log('before assignment')
      filtered[0].qty = qty;
      // cartItems.push(filtered[0]);
      console.log('after',cartItems);
    }

  }

});