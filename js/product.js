                                        ///////// all const /////////

const teddies = document.getElementById('teddies');
const urlApi = 'http://localhost:3000/api/teddies';
const searchParams = new URLSearchParams(window.location.search);
const teddieId = searchParams.get('id');
const productShow = document.getElementById('productShow');

//console.log(teddies)
//console.log(urlApi);
//console.log(searchParams);
//console.log(teddieId);
//console.log(productShow);


                        ///////// Partie concernant la page HTML -> index.html /////////

function showTeddies(){
fetch(urlApi)
    .then((resp) => resp.json())
    .then(function(data) {
        let teddie = data;
        //console.log(teddie); 
        //console.log(teddie.length);
        //console.log(teddie[0], teddie[1], teddie[2], teddie[3], teddie[4]);
        for (let i = 0; i < teddie.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myImg = document.createElement('img');

        myH2.classList.add('titleTeddie');
        myImg.classList.add('imageTeddie');

        myArticle.setAttribute('data-id', teddie[i]._id); 
        myArticle.classList.add('article');
        myH2.textContent = "Nom du produit : " + teddie[i].name;
        myImg.src = teddie[i].imageUrl;

        //console.log(myArticle);
        //console.log(myH2);
        //console.log(myPara1);
        //console.log(myImg);
        //console.log(selectImg);
        //console.log(myPara2); 

        myArticle.appendChild(myH2);
        myArticle.appendChild(myImg);

        teddies.appendChild(myArticle);
    }
        const articles = document.querySelectorAll('article');
        for (let article of articles) {
            article.addEventListener('click', event => {
            window.open(`../html/product.html?id=${[article.dataset.id]}`);
        });
        //console.log(article.dataset.id);
        //console.log(articles);
    }
})
.catch(function(error) {
  console.log(error);
});
}


                        ///////// Partie concernant la page HTML -> product.html /////////


function selectProduct() {
fetch(urlApi + "/" + teddieId)
    .then((resp) => resp.json())
    .then(function(data) {
        let teddie = data;
        //console.log(teddie);

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
        myButton.classList.add('buttonToCart')

        myArticle.classList.add('article');
        myH2.textContent = "Nom du produit : " + teddie.name;
        myOption.textContent = teddie.colors[0];
        myPara1.textContent = "prix : " + teddie.price/100+"€";
        myImg.src = teddie.imageUrl;
        myPara2.textContent = "Description : " + teddie.description;
        myButton.textContent = "Ajouter au panier";

        //console.log(myArticle);
        //console.log(myH2);
        //console.log(mySelect);
        //console.log(myPara1);
        //console.log(myImg);
        //console.log(selectImg);
        //console.log(myPara2);
        //console.log(myButton);

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
        //console.log(error);
    })
}




