export const orderAz =(lolArchive)=>lolArchive.sort((a, b) => {
  return (a.name < b.name) ? - 1 : 1
});
export const orderZa =(lolArchive)=>lolArchive.sort((a, b) => {
  return (a.name > b.name) ? - 1 : 1
}); 

export function filterLol(lolArchive, typeChampions) {
  return lolArchive.filter(item => item.tags.includes(typeChampions));
  }; 



// funções de exemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

/*export const filterLol = () => {
  array.function (key , type, id, image);
}
    return function
  
 

  //return 'example' */

