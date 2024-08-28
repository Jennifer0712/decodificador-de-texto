var botaoEncriptar = document.querySelector(".secao__entrada__btn__cripitografar");
var botaoDesencriptar = document.querySelector(".secao__entrada__btn__desencriptar");
var pessoa = document.querySelector(".secao__saida__imagem");
var paragrafo = document.querySelector(".secao__saida__texto");
var resultado = document.querySelector(".secao__saida__mensagem__resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var caixatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(caixatexto);
}

function desencriptar(){
    ocultarAdelante();
    var caixatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(caixatexto);
}

function recuperarTexto(){
    var caixatexto = document.querySelector(".secao__entrada__texto__campo")
    return caixatexto.value
}

function ocultarAdelante(){
    pessoa.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function encriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".secao__entrada__btn__copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Oi"); 
});