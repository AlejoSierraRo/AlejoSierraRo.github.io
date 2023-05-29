const textAreaLeft = document.querySelector(".text-area-left");
const textareaRight = document.querySelector(".text-area-right");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



textAreaLeft.addEventListener("input", function () {
  const inputValue = textAreaLeft.value;
  const tildeLetters = /[áéíóú]/gi;

  if (tildeLetters.test(inputValue)) {
    alert("Por favor no ingresar palabras con tílde, ingrese de nuevo el texto a encriptar");
    textAreaLeft.value = "";
  }
});



function bnEncriptar(){

    const textoEncriptado = encriptar(textAreaLeft.value)
    textareaRight.value = textoEncriptado 
    textAreaLeft.value = "";
    textareaRight.style.backgroundImage = "none"
}


function encriptar(stringEncriptarada){
    let matrizCod = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
stringEncriptarada = stringEncriptarada.toLowerCase();
for(let i = 0; i<matrizCod.length; i++){
    if(stringEncriptarada.includes(matrizCod[i][0])){
        stringEncriptarada=stringEncriptarada.replaceAll(matrizCod[i][0],matrizCod[i][1])

    }

}
return stringEncriptarada

}


function bnDesencriptar(){

    const textoDesencriptado = desencriptar(textAreaLeft.value)
    textareaRight.value = textoDesencriptado 
    textAreaLeft.value = "";
    textareaRight.style.backgroundImage = "none"
}



function desencriptar(stringdesencriptarada){
    let matrizCod = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencriptarada = stringdesencriptarada.toLowerCase();
for(let i = 0; i<matrizCod.length; i++){
    if(stringdesencriptarada.includes(matrizCod[i][1])){
        stringdesencriptarada=stringdesencriptarada.replaceAll(matrizCod[i][1],matrizCod[i][0])

    }

}
return stringdesencriptarada
}


const btnCopiar = document.querySelector(".bton-copiar");

btnCopiar.addEventListener("click", function () {
  textAreaLeft.value = textareaRight.value;
});

