import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

import { orderAz, orderZa, filterLol, searchName } from './data.js';
// import data from './data/lol/lol.js';

//codigo para pegar o valor do input e imprimir no index2



let lolArchive = [];
  for (let item in lol.data){
  lolArchive.push(lol.data[item]);
};
console.log(lolArchive)

//função para printar personagens na tela
let lolList = document.getElementById("list");
function showAllCards(data){
  lolList.innerHTML=""
  for (let list in data) {
  let eachCard = createNewDiv(data[list].img,data[list].name);
  lolList.appendChild(eachCard);
  }
}

function createNewDiv(photo, nome){
  let cards = document.createElement('div');
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

//função Modal
function startModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add("modal-box")
}

const logo = document

startModal("modal-fundo")
