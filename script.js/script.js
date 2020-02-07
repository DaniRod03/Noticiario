const API_KEY = "bc23c76d178247d2aa33a2ba25320c5a";
let noticia = document.getElementById("noticia")
let btnCarregar = document.querySelector("#btnCarregar")

let config = {
    method: "GET"
}

function mostrarNaTela(listaNoticias){
    listaNoticias.forEach((txtNoticia )=> {
        let novaNoticia= `
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${txtNoticia.urlToImage}" alt="Palmeiras: Mathias Viña" title="Palmeiras">
            <div class="card-body">
                <h5 class="card-title">${txtNoticia.title}</h5>
                <p  class="card-text">${txtNoticia.description}</p>
                <a href="#" class="btn btn-primary">Visitar</a>
            </div>
        </div>`


        noticia.insertAdjacentHTML('beforeend', novaNoticia);
   
    });

}

 btnCarregar.onclick = ()=> {
            let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config).then((resposta)=>{
            return resposta.json();
            })
            .then((json)=>{
                
                mostrarNaTela(json.articles)
                
            })
}
          
        



