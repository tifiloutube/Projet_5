const api = 'http://localhost:3000/api/teddies';

function addToCart(){
    fetch(api + '/' + teddieId)
    .then((resp) => resp.json())
    .then(function(data) {
        let teddie = data;
        //console.log(data);
        data.quantity = 0; // On ajoute une variable quantité à l'objet qui affichera le nombre de fois que l'objet à été sélectionné.
        let carts = document.getElementsByClassName('buttonToCart');
        //console.log(carts);
    for(let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            //console.log("ajout du produit au panier");
            cartNumbers(teddie[i]);
            totalCost(teddie[i]);
        })
    }
    //console.log(teddie);

// Modification de l'affichage du nombre de produit dans le panier au niveau du header  
    function onLoadCartNumbers(){
        let productNumbers = localStorage.getItem('cartNumbers');
        if(productNumbers){
            document.querySelector('.cart span').textContent = productNumbers;
        }
    }
// Ajout du nombre de produit dans le localStorage au moment du click sur le bouton "ajouter au panier"
    function cartNumbers(teddie) {
        //console.log("the teddie click is ", data);
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        if (productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;  
        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;  
        } 
        setItems(data);
    }
// Modification de la variable quantité dans l'objet
    function setItems(teddie){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if(cartItems != null){
            if(cartItems[data.name] == undefined){
                cartItems = {
                    ...cartItems,
                    [data.name]: teddie
                }
            }
            cartItems[data.name].quantity += 1;
        } else {
            data.quantity = 1;
            cartItems = {
                [data.name]: teddie
            }
        }
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
// Ajout du prix total dans le localStorage
    function totalCost(teddie){
        //console.log("Le prix du produit est", data.price/100);
        let cartCost = localStorage.getItem('totalCost');

        //console.log("Le prix total est", cartCost);
        //console.log(typeof cartCost);

        if(cartCost != null){
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + data.price/100);
        }else{
            localStorage.setItem("totalCost", data.price/100);
        }
    }
// Affichage des données stocké dans le localStorage dans la page web cart.html
    function displayCart(){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        //console.log(cartItems);
        let pageContent = document.querySelector('.page-content');
        let pageContentDescription = document.querySelector('.page-content_description');
        if(cartItems && pageContent){
            console.log("Au moins un produit est dans le localStorage"); 
            pageContent.removeChild(pageContentDescription);
            const myArticle = document.createElement('article');
            const produit = document.createElement('h5');  
            const prix = document.createElement('h5');
            const quantité = document.createElement('h5');
            const total = document.createElement('h5');
            const barreHorizontal = document.createElement('hr');

            myArticle.appendChild(produit);
            myArticle.appendChild(prix);
            myArticle.appendChild(quantité);
            myArticle.appendChild(total);
            myArticle.appendChild(barreHorizontal);

            produit.innerHTML = "Produit";
            prix.innerHTML = "Prix";
            quantité.innerHTML = "Quantité";
            total.innerHTML = "Total";
            
            pageContent.appendChild(myArticle);

            const showMyArticle = document.createElement('article')
            //const imgProduit = document.createElement('img');
            //const prixProduit = document.createElement('p');
            //const quantitéProduit = document.createElement('p');
            //const totalPrix = document.createElement('p');

            //showMyArticle.appendChild(imgProduit);
            //showMyArticle.appendChild(prixProduit);
            //showMyArticle.appendChild(quantitéProduit);
            //showMyArticle.appendChild(totalPrix);

            pageContent.appendChild(showMyArticle);

            showMyArticle.classList.add('allProductsInCarts');
            let allProductsInCarts = document.getElementsByClassName('allProductsInCarts');
            console.log(allProductsInCarts);

            allProductsInCarts.innerHTML = '';
            Object.values(cartItems).map(item => {
                allProductsInCarts.innerHTML += `
                <div class="product">
                    <img src="${item.imageUrl}">
                    <span>${item.name}</span>
                </div>
                <div class="prix">${item.price/100},00€</div>
                <div class="quantité">
                    <span>${item.quantity}</span>
                </div>
                <div class="total">
                    ${item.quantity * item.price/100},00€
                </div>
                `;
            })
        }else{
            console.log("Aucun produits n'est dans le localStorage")
        }
    }
onLoadCartNumbers();
displayCart();
})
}




