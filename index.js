
const url = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10";
const main = document.querySelector("main");
const next = document.getElementsByClassName("next");
const prev = document.getElementsByClassName("prev")

function getPokemon() {
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
    })
//tengo que pensar como realizar esta parte, para que sea enviada a getMoreData
}
function getMoreData() {
    
}
function createdPokemon(){
for (let i = 0; i < data.length; i++) {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", `${data[i].results.sprites.front_default}`)
    let txt = document.createElement("h1")
    txt.textContent = `${data[i].results.name}`
    let id = document.createElement("span")
    id.textContent = `#${[i]}`
    main.appendChild(newImage);
    main.appendChild(txt)
    main.appendChild(id)
}
}
function nextPag() {
    next.addEventListener("click",function(){
        data.next += 10;
    })
}
function prevPag() {
    prev.addEventListener("click", function(){
        data.prev -= 10;
    })
}
getPokemon()

/* enlace al video de pokemon que muestra como hacerlo https://www.youtube.com/watch?v=59Jq_T7G4y4
estructura que quiero necesita: funciones
1 una funcion que haga que cuando buscamos un pokemon este aparesca. En esta tenemos que hacer que se eliminen todos los demas pokemones
2 una funcion que haga que cuando le damos a next pase a la siguiente linea
3 una funcion que haga que cuando le damos a prev valla a la anterior linea. Este solo aparece cuando pasamos la primer pagina
4 una funcion que cree las imagenes de los pokemones con sus datos

la api al buscar un array de los pokemones lo que hace es devolver solo dos datos, 1 es el nombre del pokemon y el 2 es la url donde estan todos los datos que hay de ese 
pokemon en particular, es decir que yo debo realizar un doble fetch para poder obtener todos los datos de los pokemones
la logica deberia ser que
1 hacemos un fetch para que me traiga el array con los pokemones,
2 a partir de ahi ir a la url de dicho pokemon y obtener todo los demas datos que necesitamos.





*/