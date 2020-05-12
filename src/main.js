import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

import { orderAz, orderZa } from './data.js';
// import data from './data/lol/lol.js';

//codigo para pegar o valor do input e imprimir no index2

/*document.getElementById('btn').addEventListener('click', print);
function print () {
  sessionStorage.setItem('summonerName', document.getElementById('start').value);
  var checkSummonerName = sessionStorage.getItem('summonerName');
    if (checkSummonerName == '') {
      alert('Verifique se inseriu seu nome invocador');
    } else {
      window.location.href='index2.html'
      document.getElementById('hello').innerHTML = sessionStorage.getItem('summonerName');
    }
};*/

let lolArchive = [];
 for (let item in lol.data) {
   lolArchive.push(lol.data[item]);
 }
console.log(lolArchive)

//função para printar personagens na tela
let lolList = document.getElementById("list");
function showAllCards(){
  function createNewDiv(photo, nome){
  let cards = document.createElement('div');
  cards.innerHTML = (`<img src = '${photo}'> <p>${nome}</p>`);
  return cards
  };

  for (let list in lol.data) {
  let eachCard = createNewDiv(lol.data[list].img, lol.data[list].name);
  lolList.appendChild(eachCard);
  }
}
showAllCards();


const ordenar = document.getElementById('ordenar')
document.getElementById('ordenar').addEventListener('change', Az)
function Az (){
  const indexSelect = ordenar.selectedIndex
  const itemSelect = ordenar[indexSelect].value
  if(itemSelect === "a-z"){
    console.log (orderAz(lolArchive))
    orderAz(lolArchive)  
  } else {
    console.log (orderZa(lolArchive))
    orderZa(lolArchive)
  };
  
  //console.log(ordenar[itemSelect].value)
  
  //showAllCards(orderAz);
};

