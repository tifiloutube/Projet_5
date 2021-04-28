const urlApi = 'http://localhost:3000/api/teddies';
const searchParams = new URLSearchParams(window.location.search);
const teddieId = searchParams.get('id');
const productShow = document.getElementById('productShow');

console.log(urlApi);
console.log(searchParams);
console.log(teddieId);
console.log(productShow);

function selectProduct() {
fetch(urlApi + "/" + teddieId)
    .then((resp) => resp.json())
    .then(function(data) {
        let teddie = data;
        console.log(teddie);

        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const mySelect = document.createElement('select');
        const myOption = document.createElement('option');
        const myPara1 = document.createElement('p');
        const myImg = document.createElement('img');
        const myPara2 = document.createElement('p');
        const myButton = document.createElement('button');

        myH2.classList.add('titleTeddie');
        mySelect.classList.add('colorsTeddie');
        myPara1.classList.add('priceTeddie');
        myImg.classList.add('imageTeddie');
        myPara2.classList.add('descriptionTeddie');
        myButton.classList.add('buttonToBasket')

        myArticle.classList.add('article');
        myH2.textContent = "Nom du produit : " + teddie.name;
        myOption.textContent = teddie.colors[0];
        myPara1.textContent = "prix : " + teddie.price/100+"€";
        myImg.src = teddie.imageUrl;
        myPara2.textContent = "Description : " + teddie.description;
        myButton.textContent = "Ajouter au panier";

        //console.log(myArticle);
        //console.log(myH2);
        console.log(mySelect);
        //console.log(myPara1);
        //console.log(myImg);
        //console.log(selectImg);
        //console.log(myPara2);
        console.log(myButton);

        myArticle.appendChild(myH2);
        mySelect.appendChild(myOption);
        myArticle.appendChild(mySelect);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myButton);

        productShow.appendChild(myArticle);
    })
    .catch(function(error) {
        console.log(error);
    })
}

selectProduct();


