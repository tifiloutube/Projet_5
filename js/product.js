fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
    })
/*  if ("content" in document.createElement("template")){
    var product = document.querySelector(".product");
    var clone = document.importNode(template.content, true);
    var picture = clone.querySelector("#picture")
    var name = clone.querySelector("#name")
    var description = clone.querySelector("#description")
    var prix = clone.querySelector("#prix")
    name[0].textContent = "Norbert"
    description[0] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    prix[0] = 2900
} else {

}
*/

const init = function() {
    let temp, cln, product
    product = document.getElementById("product");
    temp = document.querySelector("productrow");
    cln = temp.cloneNode(true);
    temp2 = cln.textContent;
    product.innerHTML = temp2
    
    /*let product, template
    product = document.getElementById("product");
    template = document.querySelector("#productrow");
    for(let i=0; i<5; i++){
        product.appendChild(template.importNode(content, true));
    }*/   
}
