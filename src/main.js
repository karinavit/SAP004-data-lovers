import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

//import { filterLol } from 'data.js';
// import data from './data/lol/lol.js';

//codigo para pegar o valor do input e imprimir no index2

document.getElementById('btn').addEventListener('click', print);
function print () {
  sessionStorage.setItem('summonerName', document.getElementById('start').value);
  var checkSummonerName = sessionStorage.getItem('summonerName');
    if (checkSummonerName == '') {
      alert('Verifique se inseriu seu nome invocador');
    } else {
      window.location.href='index2.html'
      document.getElementById('hello').innerHTML = sessionStorage.getItem('summonerName');
    }
};

let lolData = [];
 for (let item in lol.data) {
   lolData.push(lol.data[item]);
 }
console.log(lolData)
//função para printar personagens na tela

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



const orderAz =lolData.sort((a, b) => {
  return (a.name < b.name) ? - 1 : 1
});

console.log(orderAz)

const orderzA =lolData.sort((a, b) => {
  return (a.name > b.name) ? - 1 : 1
});

console.log(orderzA)
  //return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

