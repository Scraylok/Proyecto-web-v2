let carritoIcono = document.querySelector("#carrito-icono");
let Carrito = document.querySelector(".carrito");
let cerrarCarrito = document.querySelector("#cerrar__carrito");

//abrir carrito

carritoIcono.onclick = () => {
    Carrito.classList.add("activar");
};

//cerrar carrito

cerrarCarrito.onclick = () => {
    Carrito.classList.remove("activar");
};

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else {
    ready();
}

//funciones

function ready(){
    //eliminar items del carrito
    var botonEliminarcarri = document.getElementsByClassName("carrito__eliminacion");
    console.log(botonEliminarcarri);
    for (var i = 0; i < botonEliminarcarri.length; i++) {
        var boton = botonEliminarcarri [i];
        boton.addEventListener("click", eliminarproducto);
    }
    // Cantidad de productos
    var cantidadInput = document.getElementsByClassName("carrito__cantidad")
    for (var i = 0; i < cantidadInput.length; i++){
        var input = cantidadInput[i];
        input.addEventListener("change", cantidadCambio);
    }

}
// agregar al carrito
var añadirAlCarrito = document.getElementsByClassName("carrito__añadir")
for (var i = 0; i < añadirAlCarrito.length; i++){
    var boton = añadirAlCarrito[i];
    boton.addEventListener("click", añadirAlCarritoClick);
}
// boton de compra
document.getElementsByClassName("boton__compra")[0].addEventListener("click", botonComprarClick);

function botonComprarClick(){
    alert('Tu compra fue exitosa');
    var carritoContenido = document.getElementsByClassName("carrito__contenido")[0];
    while (carritoContenido.hasChildNodes()){
        carritoContenido.removeChild(carritoContenido.firstChild);

    }
    actualizartotal();
}

//eliminar productos del carrito
function eliminarproducto(event){
    var botonclicked = event.target;
    botonclicked.parentElement.remove();
    actualizartotal();
}
//Cambio de cantidad de productos
function cantidadCambio(event){
    var input = event.target;
    if(isNaN(input.value || input.value <= 0)){
        input.value = 1;
    }
    actualizartotal();
}
//añadir al carrito
function añadirAlCarritoClick(event){
    var boton = event.target;
    var comprarProductos = boton.parentElement;
    var titulo = comprarProductos.getElementsByClassName("producto__titulo")[0].innerText;
    var precio = comprarProductos.getElementsByClassName("precio")[0].innerText;
    var productoimg = comprarProductos.getElementsByClassName("producto__img")[0].src;
    agregarproductoalcarrito(titulo, precio, productoimg); 
    actualizartotal();
}
function agregarproductoalcarrito(titulo, precio, productoimg) {

    var carritoCompraContenedor = document.createElement("div");
    carritoCompraContenedor.classList.add("carrito__contenedor");
    var carritoproductos = document.getElementsByClassName("carrito__contenido")[0];
    var nombreproductos = carritoproductos.getElementsByClassName("carrito__producto-titulo")
    for (var i = 0; i < nombreproductos.length; i++){

        if (nombreproductos[i].innerText == titulo){
            
          alert('Este producto ya esta en el carrito')
          return;
        }
     }
}
var carritoContenidoDelContenedor = ` 
<img src="${productoimg}" class="carrito__img" alt="">
    <div class="detalle__contenedor">
        <div class="carrito__producto-titulo">${titulo}</div>
            <div class="carrito__precio">${precio}</div>
    <input type="number" value="1" class="carrito__cantidad">
    </div>
    <!-- Eliminacion de productos -->
    <img src="../Resources/imgbin_dust-bin-garbage-box-trash-can-png.png" class="carrito__eliminacion" alt="">

`;
carritoCompraContenedor.innerHTML = carritoContenidoDelContenedor
carritoproductos.append(carritoCompraContenedor)
carritoCompraContenedor.getElementsByClassName("carrito__eliminacion")[0].addEventListener("click",eliminarproducto);
carritoCompraContenedor.getElementsByClassName("carrito__eliminacion")[0].addEventListener("cambio",cantidadCambio);



//actualizacion de cotizacion
function actualizartotal() {
    var carritoContenido = document.getElementsByClassName("carrito__contenido")[0];
    var carritoContenedores = carritoContenido.getElementsByClassName("carrito__contenedor");
    var total = 0;
    for (var i = 0; i < carritoContenedores.length; i++){
        var carritoContenedor = carritoContenedores[i];
        var precioElemento = carritoContenedor.getElementsByClassName("carrito__precio")[0];
        var cantidadElemento = carritoContenedor.getElementsByClassName("carrito__cantidad")[0];
        var precio = parseFloat(precioElemento.innerText.replace("$", ""));
        var cantidad = cantidadElemento.value;
        total= total + (precio * cantidad);
    }

 document.getElementsByClassName("total__precio")[0].innerText = "$" + total;
    
}