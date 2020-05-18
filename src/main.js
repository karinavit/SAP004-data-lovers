import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

import { orderAz, orderZa, filterLol, searchName } from './data.js';
// import data from './data/lol/lol.js';


let lolArchive = [];
  for (let item in lol.data){
  lolArchive.push(lol.data[item]);
};
//console.log(lolArchive)

//função para printar personagens na tela
let lolList = document.getElementById("list");
function showAllCards(data){
  lolList.innerHTML=""
  for (let list in data) {
  let eachCard = createNewDiv(data[list].img,data[list].name);
  lolList.appendChild(eachCard);
  eachCard.addEventListener("click", ()=>{ 
    startModal() 
    modalTemplate(data[list].name,data[list].img,data[list].tags, data[list].info.attack)});
  }
}


function createNewDiv(photo, nome){
  let cards = document.createElement('div');
  cards.setAttribute('class', 'show-lol');
  cards.innerHTML = (`<img src = '${photo}'> <p>${nome}</p>`);
 
  return cards;
};
showAllCards(lolArchive);





const ordenar = document.getElementById('ordenar');
document.getElementById('ordenar').addEventListener('change', Az);
function Az (){
  const indexSelect = ordenar.selectedIndex;
  const itemSelect = ordenar[indexSelect].value;
  if(itemSelect === "a-z"){
    showAllCards(orderAz(lolArchive));  
  } else {
    showAllCards(orderZa(lolArchive));
  }; 
};


document.getElementById('as').addEventListener('click',()=> showAllCards(filterLol(lolArchive,"Assassin")));
document.getElementById('ma').addEventListener('click',()=> showAllCards(filterLol(lolArchive,"Mage")));
document.getElementById('lu').addEventListener('click',()=> showAllCards(filterLol(lolArchive,"Fighter")));
document.getElementById('at').addEventListener('click',()=> showAllCards(filterLol(lolArchive,"Marksman")));
document.getElementById('su').addEventListener('click',()=> showAllCards(filterLol(lolArchive,"Support")));
document.getElementById('ta').addEventListener('click',()=> showAllCards(filterLol(lolArchive,"Tank")));


//nossa função de busca
document.getElementById('btnbusca').addEventListener('click', function click () {
  let valorInput= document.getElementById('txtBusca').value
  let searchcards = searchName (lolArchive , valorInput)
  showAllCards(searchcards)
})

//função para chamar no Modal ( o que vai aparecer no nosso modal)

//showAllcards e CreatNewDiv, usadas aepnas para referência
/* let lolList = document.getElementById("list");
function showAllCards(data){
  lolList.innerHTML=""
  for (let list in data) {
  let eachCard = createNewDiv(data[list].img,data[list].name);
  lolList.appendChild(eachCard);
  }
} */

/* function createNewDiv(photo, nome, info){
  let cards = document.createElement('div');
  cards.innerHTML = (`<img src = '${photo}'> <p>${nome}</p>`);
  return cards;
};
showAllCards(lolArchive);  */


/* let lolModal = document.getElementById("modal-box");
 function createDataModal(data){
   lolModal.innerHTML=""

   for (let modalbox in data) {
    let cardsModal = divCardsModal(data[modalbox].img,data[modalbox].name, data[modalbox].info, data[modalbox.tags]);
    lolModal.appendChild(cardsModal);
   }}

   function divCardsModal(img,name, info, tags){
    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = (`<p>${name}</p>
    <img src = '${img}'> 
  <p>${info}</p>
  <p>${tags}</p>`);
    return modalDiv;
   } */
 
//showAllCards(lolArchive);

//função Modal
/* function startModal() {
  let modal = document.getElementById('modal-fundo')
    modal.classList.add('modal-fundo')

  modal.addEventListener('click', (e)=>{
    if(e.target.id == modal || e.target.className == 'fechar'){
      modal.classList.remove('modal-fundo')
    }
  })
}

let showChamps = document.querySelector(".open-box")
showChamps.addEventListener('click', ()=> startModal()) */


/* let cardsChamps = lolArchive.map((icon)=>
  `<h2>${icon.name}</h2>
  <img src = '${icon.img}'>
  <p>Classe:${icon.tags}</p>
  <p>Ataque:${icon.info.attack}</p>`);
document.getElementById('box-content').innerHTML = cardsChamps; */

function modalTemplate(nome, img, tags, attack){
  let cardsChamps = `<h2>${nome}</h2>
  <img src = '${img}'>
  <p>Classe:${tags}</p>
  <p>Ataque:${attack}</p>`;
  document.getElementById('box-content').innerHTML = cardsChamps;

}

function startModal(){
  const modal = document.getElementById('modal-fundo');
  modal.classList.add('mostrar');
  modal.addEventListener('click', (e)=> {
    if(e.target.id == 'modal-fundo' || e.target.className == 'fechar')
    modal.classList.remove('mostrar')
    
  });
}
/* const clickChamps = document.querySelector('.show-lol');
clickChamps.addEventListener('click', ()=>startModal('modal-fundo'));
 */

