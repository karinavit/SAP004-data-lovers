import lol from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

//import { filterLol } from 'data.js';
// import data from './data/lol/lol.js';

let lolData = [];
 for (let item in lol.data) {
   lolData.push(lol.data[item]);
 }
console.log(lolData)


document.getElementById("btn").addEventListener("click",print)
function print () {
  let summonerName = document.getElementById("start").value;
     if (summonerName == "") {
      alert("Verifique se inseriu seu nome invocador");

  } else {
     document.getElementById("hello").innerHTML = "Olá  " + summonerName
  };
}


function createNewDiv(name){
  let cards = document.createElement('div');
  
  cards.innerHTML= `<p>${lol.data = name}</p>`
  ;

  return cards
  }
 

let lolList = document.getElementById("list");


function showAllCards(){
  //lolList.innerHTML = name
  for (let list in lol.data) {
    let eachCard = createNewDiv(list);
   lolList.appendChild(eachCard);
  }
  return list
}

showAllCards();

console.log(lolList)









