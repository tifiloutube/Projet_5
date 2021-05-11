const api = 'http://localhost:3000/api/teddies';

function addToCart(){
    fetch(api + '/' + teddieId)
    .then((resp) => resp.json())
    .then(function(data) {
        let teddie = data;
        //console.log(data);
        let carts = document.getElementsByClassName('buttonToCart');
        //console.log(carts);

    for(let j=0; j < carts.length; j++) {
        carts[j].addEventListener('click', () => {
            console.log("ajout du produit au panier");
            cartNumbers(teddie[j]);
        })
    }

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(teddie) {
    console.log("the teddie click is ", data);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;  
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;  
    } 
}
onLoadCartNumbers();
})
}




