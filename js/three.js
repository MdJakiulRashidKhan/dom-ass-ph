document.getElementById('cardThree').addEventListener('click', function () {
  createElement('productThree');

  const cardThreeCostTotal = allCardText('cardThreeText');
  updateTotalPrice(cardThreeCostTotal, 'totalPrice');
});
