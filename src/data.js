// Filtrado de tipo
    export const filterByType =(condition,pokemonList)=>{
      //variable en donde se guarda el filtro aplicado 
      //se usa método filter que tiene dentro una función con parámetro el pokemon individual
      //y compara si el array de tipos de ese pokemon incluye (con includes) la condición enviada (tipo seleccionado);
      let filterType = pokemonList.filter(pokemon => pokemon.type.includes(condition.toLowerCase()));
      //retornamos la variable filtrada;
      return filterType;
    }

//Filtrado por Region
    export const filterByRegion =(condition,pokemonList)=>{
      //variable en donde se guarda el filtro aplicado 
      //se usa método filter que tiene dentro una función con parámetro el pokemon individual
      //y compara si el key del nombre de la generación son iguales a la condición enviada (región seleccionada);
      let filterRegion = pokemonList.filter(pokemon => pokemon.generation.name == condition.toLowerCase());
      //retornamos la variable filtrada;
      return filterRegion;
    }

//Filtrado por nombre en buscador
    export const searchByName = (pokemonList, inputName) =>{
      //variable en donde se guarda el filtro por input ingresado
      //se usa método filter que tiene dentro una función con parámetro el pokemon individual
      //y se compara si el nombre del pokemon es igual a input ingresado;
      let searchName = pokemonList.filter(pokemon => pokemon.name === inputName.toLowerCase());
      //se retorna la variable con el filtro aplicado;
      return searchName;
    }

//Función de ordenado A-Z
    export const sortAZ = (condition, pokemonList) => {
      //función que tiene como parámetros los nombres de los pokemon
        function sortName(a,b){
          //si se cumple la condición de seleccionar la opción A-Z se corre la función de sort
          if (condition === "A-Z"){
            //si a es menor que b, se retorna un valor negativo, es decir, a va primero que b;
            if (a.name < b.name){
              return -1;
            }
            //si a es mayor que b, se retorna un valor positivo, es decir, b va primero que a;
            if (a.name > b.name){
              return 1;
            }
          //si a es igual a b, se retorna cero, es decir, nada cambia;
          return 0;
          }
        }
      //sort ordena los elementos localmente, es decir, solo dentro de esta función;
      pokemonList.sort(sortName);
      return pokemonList;
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
      pokemonList.sort(sortName);
      return pokemonList;
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
      pokemonList.sort(sortNum);
      return pokemonList;
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
      pokemonList.sort(sortNumPokedex);
      return pokemonList;
     }

//Funciones para estadística
// dtaos por usar: "special-attack": ["name", "base-damage", "energy", "move-duration-seg"];

//Función para calcular STAB (agregar 20% al daño si son del mismo tipo)
 export const calculatorSTAB = (attack,typeattack,typePokemon) => {
        //guardamos en constante el valor del daño convertido a número;
        const damage = Number(attack);
        //si el ti'po de pokemon es el mismo que el tipo del ataque se aumenta un 20% al daño;
        if (typePokemon.includes(typeattack)) {
              const stab = ((damage * 20) / 100 + damage);
              //retornar valor del daño aumentado;
        return stab;
        }
        //si no se cumple condición retornar daño normal;
      return damage;
}

//Función para calcular DPS: (daño*stab)/tiempo de mov.
export const calculatorDPS = (attack, typeattack, typePokemon, time) => {
      //guardamos en constantes el daño, tiempo de mov, convertidos a tipo número;
       const damage = Number(attack);
       const moveTime = Number(time);
      // guardamos en variable el resultado redondeado del daño entre el tiempo de mov = dps;
      let dps = Math.round(damage/moveTime);
      //si se cumple que el tipo de pokemon es igual al tipo de ataque, dps toma el valor de daño aumentado (STAB);
       if (typePokemon.includes(typeattack)) {
            const stab = ((damage * 20) / 100 + damage);
         dps = Math.round(stab/moveTime);
        }
      //retorna valor de dps;
    return dps;
}

//Función para calcular EPS: energía/tiempo de mov.
export const calculatorEPS = (energy, time) =>{
      //guardamos en constante el valor de energía gastada y tiempo de movimiento, convertidos a número;
       const energyExpend = Number(energy);
       const moveTime = Number(time);
    //guardamos en constante el valor redondeado de energía entre tiempo = eps;
       const eps = Math.round(energyExpend/moveTime);
    //retornamos eps;
       return eps;
}

