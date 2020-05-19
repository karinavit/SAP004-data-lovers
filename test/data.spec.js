import {lol} from './data/lol/lol.js';

import {orderAz} from '../src/data.js';

let lolArchive = [];
  for (let item in lol.data){
  lolArchive.push(lol.data[item]);
}


describe('Ordenar de A à Z', () => {
  it('is a function', () => {
    expect(typeof orderAz).toBe('function');
  });

  it('Se eu mudar o seletor deve retornar os personagens de A à Z', () => {
    expect(orderAz(lolArchive).toBe((lolArchive.name < lolArchive.name) ? - 1 : 1))
  }); 
})