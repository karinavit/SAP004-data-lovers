export const orderAz =(lolArchive)=>lolArchive.sort((a, b) => {
  return (a.name < b.name) ? - 1 : 1
});
export const orderZa =(lolArchive)=>lolArchive.sort((a, b) => {
  return (a.name > b.name) ? - 1 : 1
}); 

export function filterLol(lolArchive, typeChampions) {
  return lolArchive.filter(item => item.tags.includes(typeChampions));
  }; 

 export function searchName (lolArchive, search) { return lolArchive.filter(item =>item.name.toLowerCase().includes(search.toLowerCase())); }


