let catalogoLoja = [
  {
    nome: "Anime Woman",
    price: "R$ 400.00",
    type: "paintings",
    img: "./assets/img/actions/animewoman.jpg",
  },
  {
    nome: "Goku - DagonBallZ",
    price: "R$ 350.00",
    type: "figure",
    img: "./assets/img/actions/dragonballpersonagem.jpg",
  },
  {
    nome: "Baby Yoda",
    price: "R$ 215.00",
    type: "figure",
    img: "./assets/img/actions/starwarspersonagem.jpg",
  },
  {
    nome: "Clock MER 4",
    price: "R$ 200.00",
    type: "painting",
    img: "./assets/img/painting/clock.jpg",
  },
  {
    nome: "PS Controller",
    price: "R$ 250.00",
    type: "painting",
    img: "./assets/img/painting/gamepad.jpg",
  },
  {
    nome: "C3PO Retro",
    price: "R$ 200.00",
    type: "painting",
    img: "./assets/img/painting/c3po.jpg",
  },

{
    nome: "VI:SESSIONS Poster",
    price: "R$ 100.00",
    type: "painting",
    img: "./assets/img/painting/VI.jpg"
  },
  {
    nome: "Loonie Tunes Poster",
    price: "R$ 100.00",
    type: "painting",
    img: "./assets/img/painting/Loonie toonies.jpg"
  },
  {
    nome: "James Webb Poster",
    price: "R$ 100.00",
    type: "painting",
    img: "./assets/img/painting/James webb.jpg"
  },
  {
    nome: "Killjoy and Raze Poster",
    price: "R$ 100.00",
    type: "painting",
    img: "./assets/img/painting/killjoy and raze.jpg"
  },
  {
    nome: "Wakanda Forever Poster",
    price: "R$ 100.00",
    type: "painting",
    img: "./assets/img/painting/Black-Panther-Poster-Wakanda-Forever-Marvel-Studios-Wall-Art.jpg"
  },
  {
    nome: "Sleepy Umbreon Plushie",
    price: "R$ 300.00",
    type: "figures",
    img: "./assets/img/actions/Umbreon.jpg"
  },
{
    nome: "Cult Of The Lamb Plushie",
    price: "R$ 200.00",
    type: "figures",
    img: "./assets/img/actions/cultofthelamb.jpg"
  },
  {
    nome: "Power Ranger Lendario Action Figure",
    price: "R$ 999.99",
    type: "figures",
    img: "./assets/img/actions/Power ranger lendario.jpg"
  },
  {
    nome: "Anya SPYxFamily Figure",
    price: "R$ 250.00",
    type: "figures",
    img: "./assets/img/actions/anya.jpg"
  },
];

// let catalogoPinturas = [];

// let catalogoFigures = [];

// function separarCatalogo(catalogo) {
//   for (let i = 0; i < catalogo.length; i++) {
//     if (catalogo[i].type == "paintings") {
//       catalogoPinturas.push(catalogo[i]);
//     } else if (catalogo[i].type == "figure") {
//       catalogoFigures.push(catalogo[i]);
//     }
//   }
// }

// separarCatalogo(catalogoLoja);

function criarCard(catalogo){
    
    let catalogoPinturas = document.querySelector(".catalogoPinturas")
    let catalogoFigures = document.querySelector(".catalogoFigures")
    
    // console.log(catalogoPinturas)
    
    for(let i=0;i<catalogo.length;i++){
       
        
        let li = document.createElement("li")
        let nome = document.createElement("p")
        let preco = document.createElement("span")
        let imagem = document.createElement("img")
        
        imagem.src = catalogo[i].img
        nome.innerText = catalogo[i].nome
        preco.innerText = catalogo[i].price
        li.classList.add("card")
        
        li.append(imagem,nome,preco)

        // console.log(li)
        if(catalogo[i].type == "painting"){
            catalogoPinturas.appendChild(li)
            // console.log(catalogoPinturas)
        } else {
            catalogoFigures.appendChild(li)
        }
    }
}

criarCard(catalogoLoja)