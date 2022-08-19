import data from '../src/data/pokemon/pokemon.js';
import dataMock from './mockData.js'
import {filterByRegion, filterByType, searchByName, sortAZ, sortZA, sortNum, sortNumInverse, calculatorSTAB, calculatorDPS, calculatorEPS} from '../src/data.js';

const orderNum = [
  {
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  },
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
  },{
    num: 1,
    name: 'bulbasaur',
    stats: { 'base-stamina': 128, 'max-cp': 1115, 'max-hp': 113 },
    type: ['grass', 'poison'],
    generation: { name: 'kanto', num: 'generation i' },
  }
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
  {
    num: 10,
    name: 'caterpie',
    stats: { 'base-stamina': 128, 'max-cp': 437, 'max-hp': 113 },
    type: ['bug'],
    generation: { name: 'kanto', num: 'generation i' },
  }
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
  },{
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
  {
    num: 5,
    name: 'charmeleon',
    stats: { 'base-stamina': 151, 'max-cp': 1653, 'max-hp': 131 },
    type: ['fire'],
    generation: { name: 'kanto', num: 'generation i' },
  }
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

const mockTypeDamage = 45;
const mockTypeAttackType = "water";
const mockTypePokemonType = "water";
const mockTypePokemonTypeDiff = "fire";
const mockTypeTime = 2.6;
const mockTypeEnergy = -33;

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
    expect(runFilterRegion.length).toBe(3);
  });

  test('debería retornar un arreglo de pokemon de la región kanto', () =>{
    const runFilterRegion = filterByRegion('kanto', dataMock.pokemon)
    expect(runFilterRegion).toEqual(dataMock.pokemon);
  });

});

describe('filterByType', () => {

  test('debería ser una función', () => {
    expect(typeof filterByType).toBe('function');
  });

  test('filtrar por grass',()=>{
    const runFilterType = filterByType('grass',dataMock.pokemon)
    expect(runFilterType.length).toBe(3);
  });

  test('filtrar por fire',()=>{
    const runFilterType = filterByType('fire',dataMock.pokemon)
    expect(runFilterType.length).toBe(0);
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
    expect(runFilterName.length).toBe(1);
  });

  test('filtrar por type debería regresar 0',()=>{
    const runFilterName = searchByName(dataMock.pokemon, 'fire')
    expect(runFilterName.length).toBe(0);
  });

});

describe('Corroborar funciones de ordenado alfabeticamente (A-Z/Z-A)',() =>{

  it('sortAZ debería ser una función', ()=> {
    expect(typeof sortAZ).toBe('function');
  });

  it('sortAZ debería ordenar de A-Z', () => {
    expect(sortAZ('A-Z', orderNameInv)).toEqual(orderName);
  });

  it('si no se cumple condición en sortAZ ordena al inverso', () => {
    expect(sortAZ('A-Z', orderName)).toEqual(orderNameInv);
  });

  it('si no se cumple condición en sortAZ ordena al inverso', () => {
    expect(sortAZ('Z-A', orderName)).toEqual(orderName);
  });

  it('sortZA debería ser una función', () => {
    expect(typeof sortZA).toBe('function');
  });

  it('sortZA debería ordenar de Z-A', () => {
    expect(sortZA('Z-A', orderNameTwo)).toEqual(orderNameInvTwo);
  });

  it('si no se cumple condición en sortZA ordena al inverso', () => {
    expect(sortZA('Z-A', orderNameInvTwo)).toEqual(orderNameTwo);
  });

  it('si no se cumple condición en sortZA ordena al inverso', () => {
    expect(sortZA('A-Z', orderNameInvTwo)).toEqual(orderNameInvTwo);
  });

  it('sortNum debería ordenar por orden numérico ascendente',() => {
    expect(sortNum('#Pokedex', orderNumInv)).toEqual(orderNum);
  });

  it('si no se cumple la condición en sortNum ordena al inverso',() => {
    expect(sortNum('#Pokedex', orderNumInv)).toEqual(orderNumInv);
  });

  it('si no se cumple la condición en sortNum ordena al inverso',() => {
    expect(sortNum('#Pokedex Inverse', orderNumInv)).toEqual(orderNumInv);
  });

  it('sortNumInverse debería ser una función', ()=> {
    expect(typeof sortNumInverse).toBe('function');
  });

  it('sortNumInverse debería ordenar por orden numérico descendente',() => {
    expect(sortNumInverse('#Pokedex Inverse', orderNumTwo)).toEqual(orderNumInvTwo);
  });

  it('si no se cumple sortNumInverse debería ordenar al inverso',() => {
    expect(sortNumInverse('#Pokedex Inverse', orderNumTwo)).toEqual(orderNumTwo);
  });

  it('si no se cumple sortNumInverse debería ordenar al inverso',() => {
    expect(sortNumInverse('#Pokedex', orderNumTwo)).toEqual(orderNumTwo);
  });

});

describe('Corroborar funciones cálculos estadísticos',() =>{

  test('calculatorSTAB debería ser una función', () => {
    expect(typeof calculatorSTAB).toBe('function');
  });

 test('debe retornar un stab de [54]',() =>{
    expect(calculatorSTAB(mockTypeDamage, mockTypeAttackType, mockTypePokemonType)).toEqual(54);
  });

  test('debe retornar un stab === damage [45]', () =>{
    expect(calculatorSTAB(mockTypeDamage, mockTypeAttackType, mockTypePokemonTypeDiff)).toEqual(45);
  })

  test('calculatorDPS debería ser una función', () => {
    expect(typeof calculatorDPS).toBe('function');
  });

  test('debe retornar un DPS de 21', () => {
    expect(calculatorDPS(mockTypeDamage, mockTypeAttackType, mockTypePokemonType, mockTypeTime)).toEqual(21);
  })

  test('debe retornar un DPS === damage [17]', () =>{
    expect(calculatorDPS(mockTypeDamage, mockTypeAttackType, mockTypePokemonTypeDiff, mockTypeTime)).toEqual(17);
  })
  test('calculatorEPS debería ser una función', () => {
    expect(typeof calculatorEPS).toBe('function');
  });

  test('debe retornar un EPS de -13', () => {
    expect(calculatorEPS(mockTypeEnergy, mockTypeTime)).toEqual(-13);
  })

});
