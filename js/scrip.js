//Seleccionar contenido js

//queryselector
const heading = document.querySelector('#heading');
console.log(heading)
console.log("heading");

// const textoHeading = document.querySelector('.header__texto h2');
// console.log(textoHeading);



//queryselectorall

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);




//Generar codigo html en js
const nuevoenlace = document.createElement('A')


//Agregar Href
nuevoenlace.href= 'https://facebook.com'


//Agregar texto
nuevoenlace.textContent= 'Nuevo enlace'

//Agregar clase
nuevoenlace.classList.add('navegacion__enlace')


//agregarlo al documento

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoenlace)

console.log(nuevoenlace);







//Eventos


// const enviar= document.querySelector(".button--primario")
// enviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
    

//     console.log("enviando formulario")
// });



//eventos en los inputus y textarea
const datos= {
    nombre: '',
    email: '',
    mensaje: '',


}

 const nombre= document.querySelector('#nombre')
 const email= document.querySelector('#email')
 const mensaje= document.querySelector('#mensaje')
 const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leertexto)
mensaje.addEventListener('input', leertexto)
email.addEventListener('input', leertexto)

//El evento submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    // console.log("enviando formulario");

//Validar formulario
const {nombre, email, mensaje} = datos;

if (nombre === '' || email=== '' || mensaje==='') {
    MostrarError('Todos los campos son obligatorios')
    // console.log('Todos los campos son obligatorios');
    return;
}


//Enviar Formulario
mostrarMensaje('Mensaje Enviado Correctamente')

});



function leertexto (e) {
    console.log(e.target);

datos[e.target.id]= e.target.value

 
// console.log(datos);

}

// function mostraralerta(mensaje, error = null) {
//     const alerta = document.createElement('P');
//     alerta.textContent= mensaje;

//     if (error) {
//         alerta.classList.add('error')
//     }

//     else{
//         alerta.classList.add('correcto')
//     }
// }


//Mostrando error
function MostrarError(mensaje) {
   const error=document.createElement('p')
   error.textContent=mensaje;
   error.classList.add('error')
   formulario.appendChild(error)

   setTimeout(() => {
    error.remove()
   }, 3500);
}

//Enviado correcto
function mostrarMensaje(mensaje) {
    const msj=document.createElement('p')
    msj.textContent=mensaje;
    msj.classList.add('msj')
    formulario.appendChild(msj)
 
    setTimeout(() => {
     error.remove()
    }, 3500);
 }
 



