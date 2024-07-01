
function criptografar() {
    let texto = document.querySelector('input').value.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    
    visibilidade();
    document.querySelector('textarea').value = texto;
    limparCampoInput();
}

function descriptografar() {
    let texto = document.querySelector('input').value.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    visibilidade();
    document.querySelector('textarea').value = texto;
    limparCampoInput();
}

function copiar() {
    let texto = document.querySelector('textarea').value;
    navigator.clipboard.writeText(texto);
    limparCampoOutput();
}

function limparCampoInput() {
    texto = document.querySelector('input');
    texto.value = '';
}

function limparCampoOutput() {
    texto = document.querySelector('textarea');
    texto.value = '';
}

function visibilidade() {
    document.getElementById("item1").style.visibility = "hidden";
    document.getElementById("item2").style.visibility = "hidden";
    document.getElementById("item3").style.visibility = "hidden";
}