let numeros = document.getElementsByClassName('btn');
let operadores = document.getElementsByClassName('btnOp');
let on = document.getElementById('btnOn');
let off = document.getElementById('btnOff');
let clear = document.getElementById('btnClear');
let resultado = document.getElementById('resultado');
let igual = document.getElementById('btnIgual');

// --> Initialize
for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click",function insertar(){
         resultado.value = resultado.value + numeros[i].textContent;
     });
}
for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener("click",function insertar(){
         resultado.value = resultado.value + operadores[i].textContent;
     });
}
// <-- Initialize

on.addEventListener("click",function encender(){ // Turn on
    resultado.disabled = false;
    for (let i = 0; i < numeros.length; i++)
        numeros[i].disabled = false;
    for (let i = 0; i < operadores.length; i++)
        operadores[i].disabled = false;
    clear.disabled = false;
    off.disabled = false;
    igual.disabled = false;
});

off.addEventListener("click",function apagar(){ //Turn off
    resultado.value = "";
    resultado.disabled = true;
    for (let i = 0; i < numeros.length; i++)
        numeros[i].disabled = true;
    for (let i = 0; i < operadores.length; i++)
        operadores[i].disabled = true;
    clear.disabled = true;
    off.disabled = true;
    igual.disabled = true;
});

clear.addEventListener("click",function limpiar(){ // Clean the textarea
    resultado.value = ""
});

igual.addEventListener("click",function solucionar(){// Solve the equation
    resultado.value = eval(resultado.value);
});