console.log(window.location);

function recoverIdUrl () {
    let searchParams = new URLSearchParams(window.location.search);

    if(searchParams.has('id')){
        let teddieId = searchParams.get('id');
        
        console.log(teddieId);
    }else{
        window.location.pathname = "../html/index.html";
    }
}
recoverIdUrl();