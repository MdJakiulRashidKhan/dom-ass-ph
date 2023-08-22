document.getElementById('cardTwo').addEventListener('click', function () {
  createElement('productTwo');

  const cardTwoCostTotal = allCardText('cardTwoText');
  updateTotalPrice(cardTwoCostTotal, 'totalPrice');
});
