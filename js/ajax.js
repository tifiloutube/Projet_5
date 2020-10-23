function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost:3000/api/teddies", afficher);

ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    console.log(reponse);
});

//https://openclassrooms.com/fr/courses/5511091-organisez-votre-application-avec-la-logique-redux/5937691-faites-des-appels-api-avec-fetch