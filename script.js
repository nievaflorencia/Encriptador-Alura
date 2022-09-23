/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
lo mismo pero al revés. 
*/

// function cambiarMensajeResultado(){
//     var msg = document.getElementById("result__msg").value;
//     msg = document.writeln("Este es el resultado: ")
// }


/*Orden de cómo voy a utilizar y verificar las vocales para que no se me reemplacen 
e enter
o ober
i imes
a ai
u ufat

*/ 

function encriptar(){
    var textoEncriptar = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas e o E
    //g es para toda la línea u oración
    //m es para que afecte a múltiples líneas o párrafos
    var textoEncriptado = textoEncriptar.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
};

function desencriptar(){
    var textoEncriptar = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas e o E
    //g es para toda la línea u oración
    //m es para que afecte a múltiples líneas o párrafos
    var textoEncriptado = textoEncriptar.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
};

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió")
}