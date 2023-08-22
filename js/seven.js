
  document.getElementById('cardSeven').addEventListener('click', function () {
    createElement('furnitureOne');

    const cardSevenCostTotal = allCardText('cardSevenText');
    updateTotalPrice(cardSevenCostTotal, 'totalPrice');
});
