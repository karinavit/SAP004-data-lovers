export const orderAz =(lolArchive)=>{
  const novoArray = [...lolArchive]
  return novoArray.sort((a, b) => {
  return (a.name < b.name) ? - 1 : 1
})};

export const orderZa =(lolArchive)=>{
  const novoArray = [...lolArchive]
  return novoArray.sort((a, b) => {
  return (a.name > b.name) ? - 1 : 1
})};

export function filterLol(lolArchive, typeChampions) {
  return lolArchive.filter(item => item.tags.includes(typeChampions))
}

export function searchName (lolArchive, search) { return lolArchive.filter(item =>item.name.toLowerCase().includes(search.toLowerCase())); }

export const calc = (filterCalc, data) => Math.round(((filterCalc.length) *100) / (data.length))
