

function loginfuncion(e){
    event.preventDefault();

    var usuario = document.getElementById('usuario').Value;
    var contraseña = document.getElementById('contraseña').Value;
    var resultado = document.getElementById('resultado');

    var user = localStorage.getItem(usuario);
    var datos = JSON.parse(user);
     
    if (user = null){
        resultado.innerHTML = 'El usuario es incorrecto';
    }else if(user == datos.usuario && contraseña == datos.contraseña){
        resultado.innerHTML = 'Has accedido satisfactoriamente';
    }else{
        resultado.innerHTML = 'La contraseña es incorrecta';
    }

}











