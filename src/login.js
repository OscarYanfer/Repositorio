
let text = document.getElementById('usuario'); 

let password = document.getElementById('contraseña'); 

text.required = " ";
password.required = " ";

document.addEventListener("submit", function(){
    alert('Sesion iniciada');
});
