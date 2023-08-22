
  document.getElementById('cardFour').addEventListener('click', function () {
    createElement('sportsOne');

    const cardFourCostTotal = allCardText('cardFourText');
    updateTotalPrice(cardFourCostTotal, 'totalPrice');
});
