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


/*document.getElementById("btn").addEventListener("click", print)
function print () {
  let summonerName = document.getElementById("start").value;
     if (summonerName == "") {
      alert("Verifique se inseriu seu nome invocador");
    } else {
    window.location.href='index2.html'
    document.getElementById("hello").innerHTML = summonerName
  }
}
*/

document.getElementById('btn').addEventListener('click', print)
function print () {
  sessionStorage.setItem('summonerName', document.getElementById('start').value);
  var checkSummonerName = sessionStorage.getItem('summonerName');
    if (checkSummonerName == '') {
      alert('Verifique se inseriu seu nome invocador');
    } else {
      window.location.href='index2.html'
      document.getElementById('hello').innerHTML= checkSummonerName;
    
  }
}

//document.getElementById("hello").innerHTML = sessionStorage.name

/*function page(){
  sessionStorage.name = (document.getElementById("start").value;
  location.href = ("index2.html")
}
function iniciar(){
    document.getElementById("btn").addEventListener("click", function print(){
      document.getElementById("hello").innerHTML = sessionStorage.name
    },page);
  }

window.addEventListener("load", iniciar);*/

//função que captura o valor de um input na página 1

/*document.getElementById("btn").addEventListener("click", print)
function print () {
  sessionStorage.setItem = document.getElementById("start").value;
  //let summonerName = document.getElementById("start").value;
    if (sessionStorage.name == "") {
      alert("Verifique se inseriu seu nome invocador");
    } else {
      document.getElementById("hello").innerHTML = sessionStorage.getItem;
      window.location.href="index2.html"
    
  }*/

 /* document.getElementById('btn').addEventListner("click", print)
  function print() {
    var name = document.getElementById('start').value;
    var teste = sessionStorage.setItem(name); 
    location.href='index2.html'
    var data = sessionStorage.getItem(teste);
   document.getElementById('hello').innerHTML = data;
}
*/





/*
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
*/