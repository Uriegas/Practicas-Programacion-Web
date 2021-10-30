function compute(){
    
    var estatura = parseFloat(document.getElementById("estatura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var mensaje = document.getElementById("mensaje");
    var imc = to_imc( peso, estatura );
    var type = classifier(imc);
    
    mensaje.innerHTML = mensaje.innerHTML.slice(0, 11);
    if( image = document.getElementById("result").getElementsByTagName("img")[0]){
        document.getElementById("result").removeChild(image);
    }
    mensaje.innerHTML += imc;
    var img = document.createElement("img");
    img.src = "fig/" + type + ".jpeg";
    document.getElementById("result").appendChild(img);
}

function to_imc( peso, altura ){
    var imc = peso / (altura * altura);
    return imc;
}
function classifier(imc){
    if (imc < 18.5){
        return "flaco";
    }
    else if (imc < 25){
        return "normal";
    }
    else if (imc < 30){
        return "sobrepeso";
    }
    else if (imc < 35){
        // return "Obesidad grado I";
        return "obesidad";
    }
    // else if (imc < 40){
    //     return "Obesidad grado II";
    // }
    else{
        // return "Obesidad grado III";
        return "obesidad_severa"
    }
}