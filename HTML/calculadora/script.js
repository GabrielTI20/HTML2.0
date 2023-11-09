// innerHTML troca valor que já tem 
// = (um igual ele recebe)
// == (equivalente)
// === (tipo da vareavel , valor exato)
// ! (inverte)


function calcular(operador){

    numero1= parseFloat (document.getElementById('numero1').value)
    numero2= parseFloat (document.getElementById('numero2').value)

    if(operador== "+"){
        
        resultado= numero1+ numero2

    } 
    else if(operador=="-"){

    resultado= numero1 - numero2

    }
    else if(operador=="*"){

        resultado= numero1 * numero2

    }
    else if(operador=="/"){

        resultado= numero1 / numero2

    }
        
    
    document.getElementById('resultado').innerHTML = resultado
}


























// function somar(){
    
//     numero1= parseFloat (document.getElementById('numero1').value)
//     numero2= parseFloat (document.getElementById('numero2').value)

//     resultado= numero1+ numero2

//     document.getElementById('resultado').innerHTML = resultado
// }
// function dividir(){

//     numero1= parseFloat (document.getElementById('numero1').value)
//     numero2= parseFloat (document.getElementById('numero2').value)

//     resultado= numero1- numero2

//     document.getElementById('resultado').innerHTML = resultado
// }
// function subtrair(){

//     numero1= parseFloat (document.getElementById('numero1').value)
//     numero2= parseFloat (document.getElementById('numero2').value)

//     resultado= numero1/ numero2

//     document.getElementById('resultado').innerHTML = resultado
// }
// function multiplicar(){

//     numero1= parseFloat (document.getElementById('numero1').value)
//     numero2= parseFloat (document.getElementById('numero2').value)

//     resultado= numero1* numero2

//     document.getElementById('resultado').innerHTML = resultado
// }