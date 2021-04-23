const teddies = document.getElementById('teddies');
const urlApi = 'http://localhost:3000/api/teddies';

//console.log(teddies)
//console.log(urlApi);

 
fetch(urlApi)
  .then((resp) => resp.json())
  .then(function(data) {
      let teddie = data;
      //console.log(teddie); 
      //console.log(teddie.length);
      //console.log(teddie[0], teddie[1], teddie[2], teddie[3], teddie[4]);
  function showTeddies(){
    for (let i = 0; i < teddie.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myImg = document.createElement('img');
      const myPara2 = document.createElement('p');

      myH2.classList.add('titleTeddie');
      myPara1.classList.add('priceTeddie');
      myImg.classList.add('imageTeddie');
      myPara2.classList.add('descriptionTeddie');

      myArticle.setAttribute('data-id' , teddie[i]._id); 
      myH2.textContent = "Nom du produit : " + teddie[i].name;
      myPara1.textContent = "prix : " + teddie[i].price/100+"€";
      myImg.src = teddie[i].imageUrl;
      myPara2.textContent = "Description : " + teddie[i].description;

      console.log(myArticle);
      //console.log(myH2);
      //console.log(myPara1);
      //console.log(myImg);
      //console.log(selectImg);
      //console.log(myPara2);

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myImg);
      myArticle.appendChild(myPara2);

      teddies.appendChild(myArticle);

      const article = document.querySelector('article');
      article.addEventListener('click', event => {
      window.open(`../html/product.html?id=${[teddie[i]._id]}`);
      }, false)
      //console.log(teddie[i]._id);
    }
  }
  showTeddies();
  //console.log(showTeddies);
  //console.log(teddie);
})
.catch(function(error) {
  console.log(error);
});

