
const main = document.querySelector("main")
const submit = document.querySelector("button")
const input = document.querySelector("input")
    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        pokemon = input.value
        elegirPke(pokemon)
        
    })
    
    
    
    function elegirPke() {
        let buscarApi = fetch( `https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(res =>res.json())
        .then(data =>{
            crearPokemon(data)
        })
    }

    function crearPokemon(pokemon) {
        let newImage = document.createElement("img")
        newImage.setAttribute("src",`${pokemon.sprites.front_default}` )
        let txt = document.createElement("h2");
        txt.textContent = `${pokemon.name} `
        main.appendChild(newImage)
        main.appendChild(txt)
    }

