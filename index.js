/*vamos a realizar un organizador de tareas 
para elo necesitamos.
1-un  input donde ingresamos los datos
2- hacer que esos datos queden guardados, en un li
3-debemos dar la capacidad de eliminar esa tarea una ves realizada.*/
const dato = document.querySelector("#datos");
const agregar = document.querySelector("#agregar")
const quitar = document.querySelector("#eliminar")
const main = document.querySelector("main")



/*quitar.addEventListener("click",(e)=>{
    e.preventDefault()
    task(removeChildNode)
    
})*/
agregar.addEventListener("click",(e)=>{
    e.preventDefault()
    task(dato.value)
})

function task(id) {
    let text = document.createElement("span")
    text.textContent = `${id}`
    text.classList.add("texto")
    let btn =document.createElement("button",)
    btn.textContent = "eliminar"
    btn.classList.add("btn")
    main.appendChild(text)
    main.appendChild(btn)
  
}
function removeChildNode(parent){
while(parent.firstChild){
    parent.removeChildNode(parent.firstChild)
}
}