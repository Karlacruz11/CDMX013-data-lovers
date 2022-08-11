import data from '../src/data/pokemon/pokemon.js';
import dataMock from './mockData.js'
import {filterByRegion, filterByType, searchByName, sortAZ, sortZA, sortNum, sortNumInverse} from '../src/data.js'; 

const orderNum = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const orderNumInv = [
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const orderNumTwo = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const orderNumInvTwo = [
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const orderName = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const orderNameInv = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  }
];

const orderNameTwo = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
];

const orderNameInvTwo = [
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  },
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  }
];



it('debería ser un objeto', () => {
    expect(typeof data).toBe('object');
});

describe('dataMock', () => {
  it('debería contener el nombre del pokemon', ()=>{
    const dataMockIndexZero = dataMock.pokemon[0];
    expect(dataMockIndexZero).toEqual(expect.objectContaining({name : 'bulbasaur'}));
  });
  
  it('debería contener el número del pokemon', () =>{
    const dataMockIndexTwo = dataMock.pokemon[2];
    expect(dataMockIndexTwo).toEqual(expect.objectContaining({num : '003'}));
  });

  it('debería retornar {} si se pasa length del objeto', () =>{
    const dataMockIndexFive = dataMock.pokemon[5];
    expect(dataMockIndexFive).toEqual(expect.objectContaining({}));
  });

});

describe('filterByRegion', () => {
  it('debería ser una función', () => {
    expect(typeof filterByRegion).toBe('function');
  });

  test('debería retornar [] al no encontrar coincidencias con la región ', () => {
    const runFilterRegion = filterByRegion('johto', dataMock.pokemon)
    expect(runFilterRegion).toEqual([]);
  });

  it('debería filtrar por kanto', () =>{
    const runFilterRegion = filterByRegion('kanto', dataMock.pokemon)
    expect(runFilterRegion.length).toBe(3)
  });

  test('debería retornar un arreglo de pokemon de la región kanto', () =>{
    const runFilterRegion = filterByRegion('kanto', dataMock.pokemon)
    expect(runFilterRegion).toEqual(dataMock.pokemon)
  });

});

describe('filterByType', () => {

  test('debería ser una función', () => {
    expect(typeof filterByType).toBe('function');
  });

  test('filtrar por grass',()=>{
    const runFilterType = filterByType('grass',dataMock.pokemon)
    expect(runFilterType.length).toBe(3)
  });

  test('filtrar por fire',()=>{
    const runFilterType = filterByType('fire',dataMock.pokemon)
    expect(runFilterType.length).toBe(0)
  });

  test('debería retornar [] al no encontrar coincidencias con el tipo grass', () => {
    const runFilterType = filterByRegion('fire', dataMock.pokemon)
    expect(runFilterType).toEqual([]);
  });

});


describe('searchByName', () => {

test('debería ser una función', () => {
    expect(typeof searchByName).toBe('function');
  });

  test('filtrar por input de name',()=>{
    const runFilterName = searchByName(dataMock.pokemon, 'bulbasaur')
    expect(runFilterName.length).toBe(1)
  });

  test('filtrar por type debería regresar 0',()=>{
    const runFilterName = searchByName(dataMock.pokemon, 'fire')
    expect(runFilterName.length).toBe(0)
  });

});

describe('Corroborar funciones de ordenado alfabeticamente (A-Z/Z-A)',() =>{

it('sortAZ debería ser una función', ()=> {
  expect(typeof sortAZ).toBe('function');
});

it('sortAZ debería ordenar de A-Z', () => {
  expect(sortAZ('A-Z', orderNameInv)).toEqual(orderName);
});

it('sortZA debería ser una función', () => {
  expect(typeof sortZA).toBe('function');
});

it('sortZA debería ordenar de Z-A', () => {
  expect(sortZA('Z-A', orderNameTwo)).toEqual(orderNameInvTwo);
});

it('sortAZ debería ser una función', ()=> {
  expect(typeof sortNum).toBe('function');
});

it('sortNum debería ordenar por orden numérico ascendente',() => {
  expect(sortNum('#Pokedex', orderNumInv)).toEqual(orderNum);
});

it('sortAZ debería ser una función', ()=> {
  expect(typeof sortNumInverse).toBe('function');
});

it('sortNumInverse debería ordenar por orden numérico descendente',() => {
  expect(sortNumInverse('#Pokedex Inverse', orderNumTwo)).toEqual(orderNumInvTwo);
});

});

/*describe('Corroborar funciones de ordenado por #pokedex', () => {

  it('sortNum debería ordenar por orden numérico ascendente',() => {
    expect(sortNum('#Pokedex', orderName)).toEqual(orderName);
  });

})*/
