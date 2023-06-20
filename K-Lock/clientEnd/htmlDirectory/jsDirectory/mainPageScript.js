document.addEventListener('DOMContentLoaded', function() {
    var placeOrderButton = document.getElementById('place-order-btn');
    
    placeOrderButton.addEventListener('click', function() {
      window.location.href = 'orderStatus.html';
    });
  });
  