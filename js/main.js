// Lien de l'api 
const urlApi = 'http://localhost:3000/api/teddies';
//console.log(urlApi);

// Function pour créer un élément

function createElt(tag, attribute, name){
    let nomVariable = document.createElement(tag);
    nomVariable.setAttribute(attribute, name);
    return nomVariable;
}

//console.log(createElt);


