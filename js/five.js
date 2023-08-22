document.getElementById('cardFive').addEventListener('click', function () {
  createElement('sportsTwo');

  const cardFiveCostTotal = allCardText('cardFiveText');
  updateTotalPrice(cardFiveCostTotal, 'totalPrice');
});
