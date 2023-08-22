document.getElementById('cardNine').addEventListener('click', function () {
    createElement('furnitureThree');

    const cardNineCostTotal = allCardText('cardNineText');
    updateTotalPrice(cardNineCostTotal, 'totalPrice');
});
