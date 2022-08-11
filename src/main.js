
import data from './data/pokemon/pokemon.js';
import {filterByRegion,filterByType, searchByName,sortAZ,sortZA,sortNum,sortNumInverse} from './data.js'

let pokemonData= data.pokemon;

//pokecontainer es pokemondiv y pokemonlist es la lista de objetos en objeto pokemon
const generatorHTML = (pokecontainer, pokemonList) => {
  pokecontainer.replaceChildren();
    for(let i=0; i<pokemonList.length; i++){
      let pokemonObject = pokemonList[i];

      let pokeIndividual = document.createElement('div');
      pokeIndividual.classList.add("pokemonIndividual");

      let pokemonImageDiv = document.createElement('div');
          pokemonImageDiv.classList.add("imagePokemon");
      let pokemonNameDiv = document.createElement('div');
          pokemonNameDiv.classList.add("namePokemon");
      let pokemonNumDiv = document.createElement('div');
          pokemonNumDiv.classList.add("numPokemon");
      let pokemonTypeDiv = document.createElement('div');
          pokemonTypeDiv.classList.add("typePokemon");

      pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"120px\" height=\"120px\">";
      pokemonNameDiv.innerHTML = pokemonObject["name"];
      pokemonNumDiv.innerHTML = pokemonObject["num"];
      pokemonTypeDiv.innerHTML = pokemonObject["type"];

      pokeIndividual.append( pokemonNumDiv, pokemonImageDiv, pokemonNameDiv, pokemonTypeDiv);
      pokecontainer.append(pokeIndividual);

    }
  //return pokecontainer//---no hace falta porque es redundante, pokecontainer es el pokemon div que en un inicio de puse como parámetro
  }

  const generatorHTMLCard = (pokecontainer, pokemonList) => {
    pokecontainer.replaceChildren();
      for(let i=0; i<pokemonList.length; i++){
        let pokemonObject = pokemonList[i];

        let pokeIndividual = document.createElement('div');
        pokeIndividual.classList.add("pokemonIndividual");

        let pokemonImageDiv = document.createElement('div');
            pokemonImageDiv.classList.add("imagePokemon");
        let pokemonNameDiv = document.createElement('div');
            pokemonNameDiv.classList.add("namePokemon");
        let pokemonNumDiv = document.createElement('div');
            pokemonNumDiv.classList.add("numPokemon");
        let pokemonTypeDiv = document.createElement('div');
            pokemonTypeDiv.classList.add("typePokemon");
       let pokemonGenerationDiv = document.createElement('div');
            pokemonGenerationDiv.classList.add('generationPokemon');
        let pokemonAboutDiv = document.createElement('div');
            pokemonAboutDiv.classList.add('aboutPokemon');

        pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"120px\" height=\"120px\">";
        pokemonNameDiv.innerHTML = pokemonObject["name"];
        pokemonNumDiv.innerHTML = pokemonObject["num"];
        pokemonTypeDiv.innerHTML = pokemonObject["type"];
        pokemonGenerationDiv.innerHTML = pokemonObject["generation"]["num"].replace("ii", "2").replace(" i", " 1") + "<br/>"  +
                                          pokemonObject["generation"]["name"].replace("k", "K").replace("j", "J");
        pokemonAboutDiv.innerHTML = pokemonObject["about"];

        pokeIndividual.append( pokemonNumDiv, pokemonImageDiv, pokemonNameDiv, pokemonTypeDiv, pokemonGenerationDiv, pokemonAboutDiv);
        pokecontainer.append(pokeIndividual);

      }
    //return pokecontainer//---no hace falta porque es redundante, pokecontainer es el pokemon div que en un inicio de puse como parámetro
    }



//función generator le doy como parametros el div pokemonDiv y la pokemonList
generatorHTML(document.getElementById('pokemonDiv'), pokemonData);

//document.getElementById("filtrate").addEventListener('click', dropdownF);

const selectRegion = document.getElementById('region');
document.getElementById('region').addEventListener('change',(e)=>{
  selectType.selectedIndex = "0";
  if (e.target.value === "Show All") {
    generatorHTML(document.getElementById('pokemonDiv'), pokemonData);
  }else{
    generatorHTML(document.getElementById('pokemonDiv'), filterByRegion(e.target.value, pokemonData));
  }

});

const selectType = document.getElementById('type');
document.getElementById('type').addEventListener('change',(e)=>{
  selectRegion.selectedIndex = "0";
  if (e.target.value === "Show All") {
    generatorHTML(document.getElementById('pokemonDiv'), pokemonData);
  }else{
    generatorHTML(document.getElementById('pokemonDiv'), filterByType(e.target.value, pokemonData));
  }
});

//Esta es una 2da. opcion
/*document.getElementById("region").addEventListener('change',(e)=>{
  let filteredRegion = filteredOut(e.target.value, pokemonList, "region");
  console.log(filteredRegion);

})*/

//funcionalidad para buscador por nombre (search by name)
let inputName = document.getElementById('search');//inicializa acceso a DOM
const searchSubmit = document.getElementById('searchSubmit');

searchSubmit.addEventListener('click', () =>{
  //incluir variable "llena" con .value
  generatorHTMLCard(document.getElementById('pokemonDiv'), searchByName(pokemonData, inputName.value));
});

//funcionalidad a botón de ordenar
document.getElementById('order').addEventListener('change',(e)=>{
    generatorHTML(document.getElementById('pokemonDiv'), sortNum(e.target.value, pokemonData));
    generatorHTML(document.getElementById('pokemonDiv'), sortAZ(e.target.value, pokemonData));
    generatorHTML(document.getElementById('pokemonDiv'), sortZA(e.target.value, pokemonData));
    generatorHTML(document.getElementById('pokemonDiv'), sortNumInverse(e.target.value, pokemonData));
});
