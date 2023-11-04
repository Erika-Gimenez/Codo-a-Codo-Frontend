
const formulario=document.getElementById("formulario");
const nombre=document.querySelector(".nombre");
const apellido=document.querySelector(".apellido");
const correo=document.querySelector(".correo");
const cantidad=document.querySelector(".cantidad");
const categoria= document.querySelector(".categoria");
const total= document.querySelector("#total");
const resumen=document.querySelector(".resumen");
const borrar=document.querySelector(".borrar");

formulario.addEventListener("submit", getDatos);
borrar.addEventListener("click", borrarDatos);


function getDatos (event){
event.preventDefault()

console.log({
    nombre:nombre.value,
    apellido:apellido.value,
    correo:correo.value,
    cantidad:cantidad.value,
    categoria:categoria.value
})

const precioInicial=200;
const precioSinDescuento=precioInicial*cantidad.value ;

switch (categoria.value) {
        case "Estudiante":
        
        console.log(precioSinDescuento*0.2);
        total.textContent=precioSinDescuento*0.2;
        break;
        case "Trainee":
          
        console.log(precioSinDescuento*0.5);
        total.textContent=precioSinDescuento*0.5;
        break;
        case "Junior":
        
         console.log(precioSinDescuento*0.85);
         total.textContent=precioSinDescuento*0.85;  
        break;
    
    
}


}

function borrarDatos(){
    total.textContent= "";
}



// function hola(){
// let miCategoria= categoria.value;
// let miCantidad= cantidad.value;
// console.log(miCantidad);
// console.log(miCategoria);

// if(miCantidad<4){

// switch(miCategoria){
// case "Estudiante":
// let cantidadEstudiante=200-(200*0.8);
// console.log(cantidadEstudiante);
// total.textContent= cantidadEstudiante;
// }

// }

// }
// resumen.addEventListener("click", hola );



   
//     console.log(cantidad);
//     categoria.addEventListener('change', function(event) {
//         const categoriaElegida = event.target.value;
// function calcular(){
//     switch (categoriaElegida){
//         case estudiante :
//          let cantidadEstudiante= cantidad*0.8;
//          total.textContent= cantidadEstudiante;

//         break;

//         case trainee :
//          let cantidadTrainee= cantidad*0.5;
//          total.textContent= cantidadTrainee;
//         break;

//         case junior :
//          let cantidadJunior= cantidad*0.15;
//          total.textContent= cantidadJunior;
//         break;
// console.log(cantidadEstudiante);
//     }
// }


// resumen.addEventListener("click", calcular);

//     });

  
//     borrar.addEventListener("click",function (){
//         total.textContent= 0;
//     } );


