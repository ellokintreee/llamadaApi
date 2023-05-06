
const main = document.querySelector(".pokemon-container")
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const spinner = document.querySelector("#spinner") 
const submit =document.querySelector(".submit")
let offset = 1
var limit = 8
prev.addEventListener("click",()=>{
   if (offset !=1) {
    offset -=9
    removeChildNodes(main)
    selectPokemon(offset,limit)
   }
})
next.addEventListener("click",()=>{
    offset += 9
    removeChildNodes(main)
    selectPokemon(offset,limit)
})
function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((resp) => resp.json())
        .then((data) =>{ createdPokemon(data);
        spinner.style.display = "none";
    });
}
function selectPokemon(offset,limit) {
    spinner.style.display = "block";
    for (let i = offset; i <= offset + limit; i++) {
        getPokemon(i)
    }
}
function createdPokemon(pokemon) {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", `${pokemon.sprites.front_default}`)
    let txt = document.createElement("h1")
    txt.textContent = `${pokemon.name}`
    let id = document.createElement("span")
    id.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    main.append(newImage);
    main.append(txt)
    main.append(id)
}
function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}



/* enlace al video de pokemon que muestra como hacerlo https://www.youtube.com/watch?v=59Jq_T7G4y4


queda hacer la busqueda de pokemon, maquetar bien la pagina.



6 una funcion que cree las imagenes de los pokemones con sus datos
7 cuando clickeamos en un pokemon en particular, mostrar solo los datos de este nada mas.





la api al buscar un array de los pokemones lo que hace es devolver solo dos datos, 1 es el nombre del pokemon y el 2 es la url donde estan todos los datos que hay de ese 
pokemon en particular, es decir que yo debo realizar un doble fetch para poder obtener todos los datos de los pokemones
la logica deberia ser que
1 hacemos un fetch para que me traiga el array con los pokemones,
2 a partir de ahi ir a la url de dicho pokemon y obtener todo los demas datos que necesitamos.



1tenemos la los datos que nos trae fech en donde cada pokemon tiene un enlace a su id,
pero, para ingresar acada pokemon, tenemos que primero ir a ese id en particular, y un bucle nos tiene que devolver ese url

el url esta en results[].url
*/