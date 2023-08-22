document.getElementById('cardSix').addEventListener('click', function () {
    createElement('sportsThree');

    const cardSixCostTotal = allCardText('cardSixText');
    updateTotalPrice(cardSixCostTotal, 'totalPrice');
});
