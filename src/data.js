export const orderAz =(lolArchive)=>lolArchive.sort((a, b) => {
  return (a.name < b.name) ? - 1 : 1
});
export const orderZa =(lolArchive)=>lolArchive.sort((a, b) => {
  return (a.name > b.name) ? - 1 : 1
}); 

export function filterLol(lolArchive, typeChampions) {
  return lolArchive.filter(item => item.tags.includes(typeChampions));
  }; 

  /* export let searchName = function searchLol(lolArchive, nameChampions) {
    return lolArchive.search(item => item.name(nameChampions));
    };  */

export function searchName(lolArchive, nameChampions) {
  return lolArchive.filter(item => item.name.includes(nameChampions));
  };