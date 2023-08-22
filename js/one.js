document.getElementById('cardOne').addEventListener('click',function(){

    createElement('productOne');

    const cardOneCostTotal = allCardText('cardOneText');
    updateTotalPrice(cardOneCostTotal, 'totalPrice');

  });