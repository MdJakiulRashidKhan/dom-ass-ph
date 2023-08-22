document.getElementById('goHomeButton').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_1');
    modal.close();

    resetValues();
});
function resetValues() {
    const totalPrice = document.getElementById('totalPrice');
    const discountPrice = document.getElementById('discountPrice');
    const inTotal = document.getElementById('inTotal');

    totalPrice.innerText = '00';
    discountPrice.innerText = '00';
    inTotal.innerText = '00';
    const purchaseEntry = document.getElementById('purchaseEntry');
    purchaseEntry.innerHTML = '';
    const makePurchaseButton = document.getElementById('makePurchase');
    makePurchaseButton.disabled = true;
}
