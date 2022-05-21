// Buscador de biblioteca de juegos

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
        console.log(e.target.value)
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach( juego =>{
  
            juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?juego.classList.remove("filtro")
              :juego.classList.add("filtro")
        })
  
    }
  
  
  })
