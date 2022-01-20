
/*  let boton3 = document.getElementById("copiar")
    .addEventListener("click", copiar); */

window.addEventListener("load", actualizarPagina);

function actualizarPagina () {
    
    let boton1 = document.getElementById("encriptador")
    .addEventListener("click", encriptar);
    

    let boton2 = document.getElementById("desencriptador")
    .addEventListener("click", desencriptar);

    let btn = document.getElementById("copiar").addEventListener("click", copiarTexto);
}

    function encriptar () {

        let textoDado = document.getElementById("texto-desencriptado").value;

        textoDado = textoDado.toLowerCase();
        textoDado = textoDado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        textoDado = textoDado.replace (/e/g , "enter");
        textoDado = textoDado.replace (/i/g , "imes");
        textoDado = textoDado.replace (/o/g , "ober");
        textoDado = textoDado.replace (/u/g , "ufat");
        textoDado = textoDado.replace (/a/g , "ai"); 
        
        document.getElementById("texto-resultado-encriptado").value = textoDado;
        
    }

    function desencriptar () {

        let textoDado = document.getElementById("texto-desencriptado").value;

            textoDado = textoDado.toLowerCase();
            textoDado = textoDado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
            textoDado = textoDado.replace ( /ai/g , "a");
            textoDado = textoDado.replace (/enter/g , "e");
            textoDado = textoDado.replace (/imes/g , "i");
            textoDado = textoDado.replace (/ober/g , "o");
            textoDado = textoDado.replace (/ufat/g , "u"); 
            
            document.getElementById("texto-resultado-encriptado").value = textoDado;
        }

    function copiarTexto () {

            let labelToPrint = document.getElementById("mensaje");
            let TextoCopy = document.getElementById("texto-resultado-encriptado");

            TextoCopy.select();
            document.execCommand('copy');
            
            labelToPrint.innerHTML = ('¡Texto Copiado!');

            window.getSelection().removeAllRanges();
            setTimeout ( () => labelToPrint.innerHTML = "", 3000);

        }
      



      

  
    















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
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/