// Filtrado de tipo
    export const filterByType =(condition,pokemonList)=>{
      let filterType = pokemonList.filter(pokemon => pokemon.type[0] == condition.toLowerCase() || pokemon.type[1] == condition.toLowerCase());
      return filterType;
    }

//Filtrado por Region
    export const filterByRegion =(condition,pokemonList)=>{
      let filterRegion = pokemonList.filter(pokemon => pokemon.generation.name == condition.toLowerCase());
      return filterRegion;
    }

//Filtrado por nombre en buscador
    export const searchByName = (pokemonList, inputName) =>{
      let searchName = pokemonList.filter(pokemon => pokemon.name === inputName.toLowerCase());
      return searchName;
    }

//Función de ordenado A-Z
    export const sortAZ = (condition, pokemonList) => {
        function sortName(a,b){
          if (condition === "A-Z"){
            if (a.name < b.name){
              return -1;
            }
            if (a.name > b.name){
              return 1;
            }
          return 0;
          }
        }
      let sortResult = pokemonList.sort(sortName);
      return sortResult;
     }

//Función de ordenado Z-A
    export const sortZA = (condition, pokemonList) => {
        function sortName(a,b){
           if (condition === "Z-A"){
             if (a.name > b.name){
               return -1;
             }
             if (a.name < b.name){
               return 1;
             }
          return 0;
          }
        }
      let sortResult = pokemonList.sort(sortName);
      return sortResult;
     }

//Función de ordenado ascendente #pokedex
    export const sortNum = (condition, pokemonList) => {
      function sortNum(a,b){
        if (condition === "#Pokedex"){
          if (a.num < b.num){
            return -1;
          }
          if (a.num > b.num){
            return 1;
          }
        return 0;
        }
      }
      let sortResult = pokemonList.sort(sortNum);
      return sortResult;
    }

//Función de ordenado descendente #pokedex
    export const sortNumInverse = (condition, pokemonList) => {
        function sortNumPokedex(a,b){
          if (condition === "#Pokedex Inverse"){
            if (a.num > b.num){
              return -1;
            }
            if (a.num < b.num){
              return 1;
            }
          return 0;
          }
        }
      let sortResult = pokemonList.sort(sortNumPokedex);
      return sortResult;
     }

//Funciones para estadística
// "special-attack": ["name", "base-damage", "energy", "move-duration-seg"];

//Función para calcular STAB (agregar 20% al daño si son del mismo tipo)
 export const calculatorSTAB = (attack,typeattack,typePokemon) => {
        const damage = Number(attack);
   if (typePokemon.includes(typeattack)) {
        const stab = Number((damage * 20) / 100 + damage);
   return stab;
  }
 return damage;
}

//Función para calcular DPS: (daño*stab)/tiempo de mov.
export const calculatorDPS = (attack, typeattack, typePokemon, time) => {
       const damage = Number(attack);
       const moveTime = Number(time);
        let dps = Math.round(damage/moveTime);
       if (typePokemon.includes(typeattack)) {
            const stab = Number((damage * 20) / 100 + damage);
         dps = Math.round(stab/moveTime);
        }
        return dps;
}

//Función para calcular EPS: energía/tiempo de mov.
export const calculatorEPS = (energy, time) =>{
       const energyExpend = Number(energy);
       const moveTime = Number(time);
    const eps = Math.round(energyExpend/moveTime) ;
    return eps;
}

 //Estas son otras opciones

   /*export const filterByType =(condition,pokemonList) => {
          let filtered = [];
          for (let i = 0; i < pokemonList.length; i++){
            let arrayTypes = pokemonList[i].type;
            for (var j = 0; j < arrayTypes.length; j++) {
              if(arrayTypes[j] == condition.toLowerCase()){
                  filtered.push(pokemonList[i]);
                }
              }
            }
            return filtered;
          }*/

  /* let regionFilter= pokemonList;
  let filterRegion = [];
  for (let i = 0; i < regionFilter.length; i++) {
    if (regionFilter[i].generation.name == condition) {
        filterRegion.push(regionFilter[i]);
    }
  }
  console.log( filterRegion);*/

/*export const filterByRegion = (filterValue, pokemonList, condition) =>{
  let filteredPokemon = [];
  if(condition == "region"){
    filteredPokemon = pokemonList.filter((current) => {
      return current.generation.name == filterValue.toLowerCase();
    });
  }
  return filteredPokemon;
}*/

//export default data
