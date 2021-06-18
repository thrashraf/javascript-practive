// grab everything we need
const inputPrice = document.querySelector('[name = price]');
const inputQuantity = document.querySelector('[name = quantity');
const total = document.querySelector('.price')
const quantityLabel = document.querySelector('.quantity-label');

//create function that we'll need
calculatePieCost = () =>{

    const input = inputPrice.value;
    const quantity = inputQuantity.value;

    const totalPrice = input * quantity;
    console.log(totalPrice);
    total.innerText = totalPrice;
}

const updateQuantity = () => {

    const quantity = inputQuantity.value;
    quantityLabel.innerText = quantity;

}



//on first run
calculatePieCost();


//add our events listener
inputPrice.addEventListener('input' , calculatePieCost);
inputQuantity.addEventListener('input' , calculatePieCost);
inputQuantity.addEventListener('input' , updateQuantity);