import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

import { orderAz, orderZa, filterLol, searchName, calc } from './data.js';
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


document.getElementById('as').addEventListener('click',()=> makeCalc(lolArchive,"Assassin"));
document.getElementById('ma').addEventListener('click',()=> makeCalc(lolArchive,"Mage"));
document.getElementById('lu').addEventListener('click',()=> makeCalc(lolArchive,"Fighter"));
document.getElementById('at').addEventListener('click',()=> makeCalc(lolArchive,"Marksman"));
document.getElementById('su').addEventListener('click',()=> makeCalc(lolArchive,"Support"));
document.getElementById('ta').addEventListener('click',()=> makeCalc(lolArchive,"Tank"));


function makeCalc(data,type) {
let filtercalc = filterLol(data,type)
let showCalc = calc(filtercalc, data);
document.getElementById("calc").innerHTML= `Você sabia que ${showCalc} % dos Champions são ${type}?`;

return showAllCards(filtercalc) 
  }


//nossa função de busca
document.getElementById('btnbusca').addEventListener('click', function click () {
  let valorInput= document.getElementById('txtBusca').value
  let searchcards = searchName (lolArchive , valorInput)
  showAllCards(searchcards)
})




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



/* const resultadoReduce = array.reduce((acumulador, item) => acumulador + item);
let resultadoReduce = lolArchive.reduce(function (acumulador, item) {
  

   return acumulador + item;
})
console.log(resultadoReduce); */



