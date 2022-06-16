
function registrarse(){
    event.preventDefault();
    
    var correo = document.getElementById('correo').Value;
    var usuario = document.getElementById('usuario').Value;
    var contraseña = document.getElementById('contraseña').Value;

    var user = {
        correo: correo,
        usuario: usuario,
        contraseña: contraseña,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(usuario, json);
    console.log('user added');

    

}


function loginfuncion(e){
    event.preventDefault();

    var usuario = document.getElementById('usuario').Value;
    var contraseña = document.getElementById('contraseña').Value;
    var resultado = document.getElementById('resultado');

    var user = localStorage.getItem(usuario);
    var datos = JSON.parse(user);
     
    if (user == null){
        resultado.innerHTML = 'El usuario es incorrecto';
    }else if(user == datos.usuario && contraseña == datos.contraseña){
        resultado.innerHTML = 'Has accedido satisfactoriamente';
    }else{
        resultado.innerHTML = 'La contraseña es incorrecta';
    }

}

var form = document.getElementById('form');
var usuario = document.getElementById('usuario');
var email = document.getElementById('correo');
var email2 = document.getElementById('correo');
var password = document.getElementById('contraseña');
var password2 = document.getElementById('contraseña2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
    const email2Value = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    // usuario

    (usuarioValue === '') ? setErrorFor(usuario, 'No se puede dejar esta casilla en blanco') : setSuccessFor(usuario); 
	
    // email
	
	if(emailValue === '') {
		setErrorFor(email, 'No se puede dejar esta casilla en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}

  
    if(email2Value === '') {
		setErrorFor(email2, 'No se puede dejar esta casilla en blanco');
	} else if(emailValue !== password2Value) {
		setErrorFor(email2, 'Los e-mails no coinciden');
	} else{
		setSuccessFor(email2);
	}



    // contraseña

    (passwordValue === '') ? setErrorFor(password, 'No se puede dejar esta casilla en blanco') : setSuccessFor(password);
	

	// contraseña 2


	if(password2Value === '') {
		setErrorFor(password2, 'No se puede dejar esta casilla en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las constraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}
}
// Mensaje error

function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;

    Swal ({
        position: 'center',
        icon: 'error',
        title: 'Algo salio mal',
        showConfirmButton: false,
        timer: 1500

    })

    
}



function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}