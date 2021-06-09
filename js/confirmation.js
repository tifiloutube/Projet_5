// Attribution des données de stockées dans l'URL
let urlData = new URLSearchParams(window.location.search);

let name = document.querySelector('.name');
let order = document.querySelector('.order');
let price = document.querySelector('.price');

//console.log();

name.textContent = urlData.get('name');
order.textContent = urlData.get('id');
price.textContent = urlData.get('price');