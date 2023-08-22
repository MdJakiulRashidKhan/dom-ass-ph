document.getElementById('cardEight').addEventListener('click', function () {
    createElement('furnitureTwo');

    const cardEightCostTotal = allCardText('cardEightText');
    updateTotalPrice(cardEightCostTotal, 'totalPrice');
});
