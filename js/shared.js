function allCardText(cardTextById){
    const cardText = document.getElementById(cardTextById);
    const cardTextString  =cardText.innerText;
    const cardAll = parseFloat(cardTextString);
    return cardAll;
 }

 function allCardTotalPrice(){
    const totalPrice=document.getElementById('totalPrice');
    const totalPriceString= totalPrice.innerText;
    const allTotalPrice = parseFloat(totalPriceString);
    return allTotalPrice;
 }
 function createElement(productById){
    const allProduct = document.getElementById(productById);
    const allProductText =allProduct.innerText;

    const purchaseEntry = document.getElementById('purchaseEntry');
    let ul =document.createElement('ul');
    let li= document.createElement('li');
    li.innerText = allProductText;
    ul.appendChild(li);
    const element=purchaseEntry.appendChild(ul);
    return element;
 }

 function discountCalculate()
 {
    document.getElementById('applyButton').addEventListener("click", function () {
        const inputField = document.getElementById('inputField');
        const inputFieldString = inputField.value;
        inputField.value = '';
    
        if (inputFieldString === 'SELL200') {
            const discountPrice = document.getElementById('discountPrice');

            const inTotal = document.getElementById('inTotal');
    
            const total = parseFloat(inTotal.innerText);
            const discount = total * 0.2;
            console.log(total);
            console.log(discount);
            const finalTotalValue = total - discount;
            inTotal.innerText =finalTotalValue.toFixed(2);

            discountPrice.innerText = discount.toFixed(2);
        }
    });      
 }
//  shard calculation 
 function updateTotalPrice(cardCost, totalCostElementId) {
    const totalCostElement = document.getElementById(totalCostElementId);
    const totalCostString = totalCostElement.innerText;
    const totalCost = parseFloat(totalCostString);

    const inTotal = document.getElementById('inTotal');
    
    const newTotalPrice = totalCost + cardCost;
    totalCostElement.innerText = newTotalPrice;
    inTotal.innerText=newTotalPrice;


    const makePurchaseButton= document.getElementById('makePayment');
    if(totalCostElement.innerText>0)
    {
        makePurchaseButton.removeAttribute('disabled');
    }
    else{
        makePurchaseButton.setAttribute('disabled', 'disabled');
    }

    const applyButton =document.getElementById('applyButton');
    if(totalCostElement.innerText>200)
    {
        applyButton.removeAttribute('disabled');
        discountCalculate();
    }
    else{
        applyButton.setAttribute('disabled', 'disabled');
    }
    
}













 