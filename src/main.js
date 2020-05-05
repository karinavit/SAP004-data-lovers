import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

import { filterLol } from 'data.js';
// import data from './data/lol/lol.js';


let lol = getFilterLol (conditions, data);
image.innerHTML = ""

for (let list of lol) {
  let eachCard = creatNewDiv(list);
  image.lolCard.appendChild(eachCard);
}
showAllCards();








