import data from './data/pokemon/pokemon.js'; //importar nuestra data pokemon;
//importar funciones de data.js;
import {filterByRegion,filterByType, searchByName,sortAZ,sortZA,sortNum,sortNumInverse,calculatorSTAB,calculatorDPS,calculatorEPS} from './data.js'

//guardar en variable data situandonos en cada pokemon;
//let porque estamos manipulando su orden con la función de ordenado;
let pokemonData= data.pokemon;

//pokecontainer es pokemondiv y pokemonlist es la lista de objetos en objeto pokemon
//función que muestra en html data
const generatorHTML = (pokecontainer, pokemonList) => {

  //limpiar el pokecontainer para desplegar nuevo contenido cuando se filtre,ordene, etc., y visceversa;
  pokecontainer.replaceChildren();

  //iterador sobre data pokemon;
    for(let i=0; i<pokemonList.length; i++){

      //índice en el que se encuentra el iterador (en este caso sobre un pokemon específico);
      let pokemonObject = pokemonList[i];

      //generación de cajas para los keys(propiedades) y valores de los objetos en pokemon data;
      const pokeIndividual = document.createElement('div');
      //generación de clases para las cajas;
      pokeIndividual.classList.add("pokemonIndividual");

      const pokemonImageDiv = document.createElement('div');
          pokemonImageDiv.classList.add("imagePokemon");
      const pokemonNameDiv = document.createElement('div');
          pokemonNameDiv.classList.add("namePokemon");
      const pokemonNumDiv = document.createElement('div');
          pokemonNumDiv.classList.add("numPokemon");
      const pokemonTypeDiv = document.createElement('div');
          pokemonTypeDiv.classList.add("typePokemon");

      //función para sustituir tipo escrito por ícono de tipo;
      const typePokemon = (typeEachPokemon) => {
        //variable vacia para ir guardando ícono correspondiente encada iteración;
        let eachTypeImg = "";
          //for each para iterar cada tipo en cada pokemon y detecta ícono que hace match;
          typeEachPokemon.forEach((elementImg) => {
            eachTypeImg += "<img src=./src/images/types/types/"+elementImg+".png alt=type pokemon/>";
          });
          return eachTypeImg;
        };

      //qué contenido se va a mostrar en cada caja en html
      pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"120px\" height=\"120px\">";
      pokemonNameDiv.innerHTML = pokemonObject["name"];
      pokemonNumDiv.innerHTML = pokemonObject["num"];
      //contenido de type es igual al ícono que arroja la función de typePokemon;
      pokemonTypeDiv.innerHTML = typePokemon(pokemonObject["type"]);

      //anexar contenido a otro contenedor con append;
      pokeIndividual.append( pokemonNumDiv, pokemonImageDiv, pokemonNameDiv, pokemonTypeDiv);
      pokecontainer.append(pokeIndividual);

    }
  //return pokecontainer//---no hace falta, es redundante, pokecontainer es el pokemon div que en un inicio pusimos como parámetro
  }

  //variables que tienen la opción de select que muestra la data en default (si no son iguales a estos valores, se corren los filtros/sorts);
  let typeFilter = "Show All";
  let regionFilter = "Show All";
  let orderFilter = "#Pokedex";

  const renderFilteredHTML = () => {
    //scope de datafiltrada es local a la función de renderFilteredHTML;
    let dataFiltrada = pokemonData;
    //si se intenta filtrar por show all regresa la data sin filtrar, si no la filtra por la op. seleccionada;
    dataFiltrada = regionFilter == "Show All" ? dataFiltrada : filterByRegion(regionFilter, dataFiltrada);
    dataFiltrada = typeFilter == "Show All" ? dataFiltrada : filterByType(typeFilter, dataFiltrada);
    //las funciones de ordenado ya tienen condicionales para correrse dentro de c/función;
    dataFiltrada = sortNum(orderFilter, dataFiltrada);
    dataFiltrada = sortAZ(orderFilter, dataFiltrada);
    dataFiltrada = sortZA(orderFilter, dataFiltrada);
    dataFiltrada = sortNumInverse(orderFilter, dataFiltrada);
    //renderiza el html según los filtros y orden usado;
    generatorHTML(document.getElementById('pokemonDiv'), dataFiltrada);
  }

  //renderiza función generator con parámetros div pokemonDiv y la pokemonList, por primera vez;
  renderFilteredHTML();

  //función que genera el html a mostrar cuando se busca por nombre - se muestra una carta más completa del pokemon;
  const generatorHTMLCard = (pokecontainer, pokemonList) => {
    pokecontainer.replaceChildren();
      for(let i=0; i<pokemonList.length; i++){
        let pokemonObject = pokemonList[i];

        const pokeIndividual = document.createElement('div');
        pokeIndividual.classList.add("pokemonIndividualCard");

        const pokemonBasics = document.createElement('div');
        pokemonBasics.classList.add('pokemonBasics');

          const pokemonImageDiv = document.createElement('div');
              pokemonImageDiv.classList.add("imagePokemon");
          const pokemonNameDiv = document.createElement('div');
              pokemonNameDiv.classList.add("namePokemon");
          const pokemonTypeDiv = document.createElement('div');
              pokemonTypeDiv.classList.add("typePokemon");

          const pokemonMiniAboutDiv = document.createElement('div');
              pokemonMiniAboutDiv.classList.add('pokemonMiniAbout');

            const pokemonGenerationDiv = document.createElement('div');
                pokemonGenerationDiv.classList.add('generationPokemon');
            const pokemonWeigthDiv = document.createElement('div');
                pokemonWeigthDiv.classList.add('weigthPokemon');
            const pokemonHeigthDiv = document.createElement('div');
                pokemonHeigthDiv.classList.add('heigthPokemon');

        const pokemonDetails = document.createElement('div');
        pokemonDetails.classList.add('pokemonDetails');

        const pokemonNumDiv = document.createElement('div');
            pokemonNumDiv.classList.add("numPokemonCard");
        const pokemonAboutDiv = document.createElement('div');
            pokemonAboutDiv.classList.add('aboutPokemon');
        const pokemonStatsDiv = document.createElement('div');
            pokemonStatsDiv.classList.add('statsPokemon');
        const pokemonAttackName = document.createElement('table');
            pokemonAttackName.classList.add('pokemonAttack');

        const typePokemon = (typeEachPokemon) => {
          let eachTypeImg = "";
          typeEachPokemon.forEach((elementImg) => {
            eachTypeImg += "<img src=./src/images/types/types/"+elementImg+".png alt=type pokemon/>";
          });
          return eachTypeImg;
        };

        pokemonImageDiv.innerHTML = "<img src=" + pokemonObject["img"] + " width=\"120px\" height=\"120px\">";
        pokemonNameDiv.innerHTML = pokemonObject["name"];
        pokemonNumDiv.innerHTML = pokemonObject["num"];
        pokemonTypeDiv.innerHTML = pokemonObject["type"] + "<br/>" + typePokemon(pokemonObject["type"]);
        pokemonGenerationDiv.innerHTML = pokemonObject["generation"]["num"].replace("ii", "2").replace(" i", " 1") + "<br/>"  +
                                          pokemonObject["generation"]["name"].replace("k", "K").replace("j", "J");
        pokemonHeigthDiv.innerHTML = "<img src=./src/images/height.png >" +" "+ pokemonObject["size"]["height"];
        pokemonWeigthDiv.innerHTML = "<img src=./src/images/weight.png >" +" "+ pokemonObject["size"]["weight"];
        pokemonAboutDiv.innerHTML = pokemonObject["about"];
        //span para dar estilo a encabezado de tabla;
        pokemonStatsDiv.innerHTML = "<span class=attacksTitle>Special Attacks</span>";
        //generación de header de tabla (etiqueta tr se refiere a rows, y etiqueta th a columns);
        pokemonAttackName.innerHTML = "<tr>"+"<th class=headerTable>Name</th>"+"<th class=headerTable>STAB</th>"+"<th class=headerTable>DPS</th>"+"<th class=headerTable>EPS</th>"+"</tr>";

        //variable vacia en la que se ira generando tabla con estadísticas a mostrar en html;
        let attackhtml= "";
        //variable para guardar los ataques especiales de cada pokemon;
        let specialAttacks=pokemonObject["special-attack"];

        //for que itera sobre los ataques especiales de cada pokemon;
        //variable attack tiene ataque en el que se esta "parado" en cada iteración;
        for (let attack of specialAttacks){
          //en cada ciclo se guardan los ataques en la variable declarada para mostrarlos en html;
          attackhtml+=
                      //columna que corresponde a nombres de ataques;
                      "<tr>"+"<th><span class=attackNameTable>"+attack.name+"</span></th>"+
                      //función que obtiene cálculo stab y muestra resultado dentro de tabla en su columna y fila correspondiente;
                      "<th><span class=attackStats>"+calculatorSTAB(attack ["base-damage"], attack ["type"], pokemonObject["type"])+"</span></th>"+
                      //función que obtiene cálculo dpsy muestra resultado dentro de tabla en su columna y fila correspondiente;
                      "<th><span class=attackStats>"+calculatorDPS(attack ["base-damage"], attack ["type"],pokemonObject["type"], attack["move-duration-seg"])+"</span></th>"+
                      //función que obtiene cálculo eps y muestra resultado dentro de tabla en su columna y fila correspondiente;
                      "<th><span class=attackStats>"+calculatorEPS(attack ["energy"], attack["move-duration-seg"])+"</span></th>"+
                      "</tr>";
        }

        //modifcamos html para agregar contenido de tabla obtenido por el iterador;
        pokemonAttackName.innerHTML = pokemonAttackName.innerHTML + attackhtml;

        pokeIndividual.append(pokemonBasics, pokemonDetails);
        pokemonBasics.append(pokemonImageDiv,pokemonNumDiv, pokemonNameDiv, pokemonTypeDiv, pokemonMiniAboutDiv);
        pokemonMiniAboutDiv.append(pokemonGenerationDiv, pokemonWeigthDiv, pokemonHeigthDiv);
        pokemonDetails.append(pokemonAboutDiv, pokemonStatsDiv);
        pokemonStatsDiv.append(pokemonAttackName);
        pokecontainer.append(pokeIndividual);

      }
    //return pokecontainer//---no hace falta porque es redundante, pokecontainer es el pokemon div que en un inicio de puse como parámetro
    }

    //función que genera mensaje de error si el input del usuario no hace match con ningún pokemon;
    const generatorHTMLErrorMessage = (pokecontainer,inputName) =>{

      pokecontainer.replaceChildren();

      const pokeMessageError = document.createElement('div');
            pokeMessageError.classList.add('messageErrorBox');
      const messageErrorText = document.createElement('p');
            messageErrorText.classList.add('messageErrorText');
      const messageErrorGif = document.createElement('div');
            messageErrorGif.classList.add('messageErrorGif');

      //añadir entre el texto del paragraph el input entre comillas del usuario que no fue encontrado;
      messageErrorText.innerHTML = "We found no matches for "  +"\" "+inputName+" \","+ "<br/>" + "try typing only the full name of a pokémon";
      messageErrorGif.innerHTML = "<img src =./src/images/error.gif >";

      pokeMessageError.append(messageErrorText, messageErrorGif);
      pokecontainer.append(pokeMessageError);

    }

//variable donde guardamos el elemento con id region;
const selectRegion = document.getElementById('region');
//listener de evento (change en el select con id de region);
document.getElementById('region').addEventListener('change',(e)=>{
  //regionFilter deja de tener valor default "Show All" y toma el target.value, con lo que se corre la función (ver línea 71);
  regionFilter = e.target.value;
  //se corre función render con el nuevo valor en regionFilter;
  renderFilteredHTML();
});

//variable donde guardamos el elemento con id type;
const selectType = document.getElementById('type');
//listener de evento (change en el select con id de type);
document.getElementById('type').addEventListener('change',(e)=>{
  //typeFilter deja de tener valor default "Show All" y toma el target.value, con lo que se corre la función (ver línea 72);
  typeFilter = e.target.value;
  //se corre función render con el nuevo valor en typeFilter;
  renderFilteredHTML();
});

//funcionalidad para buscador por nombre (search by name);
let inputName = document.getElementById('search');//inicializa acceso a DOM;
//listener de click en botón de submit(lupita);
const searchSubmit = document.getElementById('searchSubmit');
searchSubmit.addEventListener('click', () =>{
  //variable que guarda valor del input ingresado y lo envia como parámetro a función searchByName;
  let listFilter = searchByName(pokemonData, inputName.value);
  //si en la variable listFilter hay resultado(coincidencias) mostrar tarjeta pokemon;
  if(listFilter.length > 0 ){
    generatorHTMLCard(document.getElementById('pokemonDiv'), listFilter);
  //si no hay coincidencias mostrar mensaje de error;
  }else{
    generatorHTMLErrorMessage(document.getElementById('pokemonDiv'), inputName.value);
  }
  //vaciar input textbox después de dar click al botón
   inputName.value = '';
});

//funcionalidad a botón de ordenar
const selectOrder = document.getElementById('order');
//listener al haber cambio en el select con id de order;
document.getElementById('order').addEventListener('change',(e)=>{
  //orderFilter deja de tener valor default "#Pokedex" y toma el target.value, con lo que se corre la función (ver función renderFilteredHTML);
  orderFilter = e.target.value;
  //se corre función render con el nuevo valor en orderFilter;
  renderFilteredHTML();
});

//Regresa a página principal al dar click en el logotipo
document.getElementById('pokemonLogo').addEventListener('click', ()=>{
  //que el select muestre el contenido en su índice 0 ;
  selectRegion.selectedIndex = "0";
  selectType.selectedIndex = "0";
  selectOrder.selectedIndex = "0";
  //las variables se resetean a su valor default;
  typeFilter = "Show All";
  regionFilter = "Show All";
  orderFilter = "#Pokedex";
  //el render corre de nuevo con los valores en default;
  renderFilteredHTML();
});

//Limpia filtros y regresa a página principal al dar click
document.getElementById('clearButton').addEventListener('click', () => {
  //que el select muestre el contenido en su índice 0 ;
  selectRegion.selectedIndex = "0";
  selectType.selectedIndex = "0";
  selectOrder.selectedIndex = "0";
  //las variables se resetean a su valor default;
  typeFilter = "Show All";
  regionFilter = "Show All";
  orderFilter = "#Pokedex";
  //el render corre de nuevo con los valores en default;
  renderFilteredHTML();
});
