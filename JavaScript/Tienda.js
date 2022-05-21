let CarritoIcono = document.querySelector('#carrito-icono');
let Carrito = document.querySelector('.carrito');
let CerrarCarrito = document.querySelector('#cerrar__carrito');
// Abrir carrito
CarritoIcono.onclick = () =>{
    Carrito.classList.add("activar");
};

// Cerrar Carrito
CerrarCarrito.onclick = () => {
    Carrito.classList.remove("activar");
};

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', listo);
}else {
    listo();
}

function listo() {
    var eliminarcarritoboton = document.getElementsByClassName('carrito__eliminacion');
    console.log(eliminarcarritoboton);
    for (var i = 0; i < eliminarcarritoboton.length; i++){
        var boton = eliminarcarritoboton[i];
        boton.addEventListener("click", EliminarItemCarrito);

    }
    // Cantidad de productos
    var cantidadInput = document.getElementsByClassName('carrito__cantidad')
    for (var i = 0; i < cantidadInput.length; i++){
        var input = cantidadInput[i];
        input.addEventListener('cambio', cantidadCambio);

    }
    // agregar al carrito
    var añadirAlCarrito = document.getElementsByClassName('carrito__añadir-img')
    for (var i = 0; i < añadirAlCarrito.length; i++){
        var boton = añadirAlCarrito[i];
        boton.addEventListener('click', añadirAlCarritoClick);
    }
    // boton de compra
    document.getElementsByClassName('boton__compra')[0].addEventListener('click', botonComprarClick);
    
}

function botonComprarClick(){
    alert('Tu compra fue hecha');
    var carritoContenido = document.getElementsByClassName('carrito__contenido')[0];
    while (carritoContenido.hasChildNodes()){
        carritoContenido.removeChild(carritoContenido.firstChild);

    }
    actualizartotal();
}



function EliminarItemCarrito(event) {
    var botonclick = event.target;
    botonclick.parentElement.remove();
    actualizartotal();
}
function añadirAlCarritoClick(event){
    var boton = event.target;
    var comprarProductos = boton.parentElement;
    var titulo = comprarProductos.getElementsByClassName('producto__titulo')[0].innerText;
    var precio = comprarProductos.getElementsByClassName('precio')[0].innerText;
    var productoimg = comprarProductos.getElementsByClassName('producto__img')[0].src;
    agregarproductoalcarrito(titulo, precio, productoimg); 
    actualizartotal();
}
function agregarproductoalcarrito(titulo, precio, productoimg);{

    var carritoCompraContenedor = document.createElement('div');
    carritoCompraContenedor.classList.add('carrito__contenedor');
    var carritoproductos = document.getElementsByClassName('carrito__contenido')[0];
    var nombreproductos = carritoproductos.getElementsByClassName('carrito__producto-titulo')
    for (var i = 0; i < nombreproductos.length; i++){

        if (nombreproductos[i].innerText == titulo){
            
          alert('Este producto ya esta en el carrito')
          
          
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
carritoCompraContenedor.getElementsByClassName('carrito__eliminacion')[0].addEventListener('click',EliminarItemCarrito);
carritoCompraContenedor.getElementsByClassName('carrito__eliminacion')[0].addEventListener('cambio',cantidadCambio);

function actualizartotal() {
    var carritocontenido = document.getElementsByClassName('carrito__contenido')[0];
    var carritoContenedores = getElementsByClassName('carrito__contenedor');
    var total = 0;
    for (var i = 0; i < carritoContenedores.length; i++){
        var carritoContenedor = carritoContenedores[i];
        var precioElemento = carritoContenedor.getElementsByClassName('carrito__precio')[0];
        var cantidadElemento = carritoContenedor.getElementsByClassName('carrito__cantidad')[0];
        var precio = parseFloat(precioElemento.innerText.repalce('$', ''));
        var cantidad = cantidadElemento.value;
        total= total + (precio + cantidad);

        document.getElementsByClassName('total__precio')[0].innerText = '$' + total;
    }
}


// let nuevoProducto = document.getElementById("todo");
// let btn_agregar = document.getElementById("agregartodo");
// let lista = document.getElementById("todolist");

// function mostrar_lista ()
// {
//     for (let i = 0 ;i < localStorage.length ; i++){
//         let key = localStorage.key(i);
//         let item = localStorage.getItem(key);
//         addProdructo(item);
//     }

// }

// function aagregar_nuevo_producto(item){
//     if (item){
//         addProdructo(item);
//         let indice = localStorage.length;
//         localStorage.setItem(indice.toString,item.toString());
//     }else
//     {
//         alert("")
//     }

// }
// function addProdructo(item){
//     let li = document.createElement("li")
//     li.textContent = item ;
//     lista.appendChild(li);

// }

// btn_agregar.addEventListener("click",()=>
// {
//     let dato= nuevoProducto.value;
//     aagregar_nuevo_producto(dato)
//     addProdructo(dato);
// })

// nuevoProducto