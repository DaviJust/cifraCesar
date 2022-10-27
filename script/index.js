var button = document.querySelector (".buttonsCode");
button.onclick = function() {
    var notice = document.querySelector (".titleStatus1");
    notice.innerHTML =     `
    <style>
    h4 {
        color:orange
    }
    </style>
    <h4>Codificar Mensagem!</h4>
    `
    
}

var button = document.querySelector (".buttonsUncodific");
button.onclick = function() {
    var notice = document.querySelector (".titleStatus1");
    notice.innerHTML =      `
    <style>
    h4 {
        color:orange
    }
    </style>
    <h4>Decodificar Mensagem!</h4>
    `
    
}

var button = document.querySelector (".cifraBase");
button.onclick = function() {
    var notice = document.querySelector (".options1");
    notice.innerHTML =      `
    Incremento Cifra Cesar
        <input></input>
    `
}


var button = document.querySelector (".base64");
button.onclick = function() {
    var notice = document.querySelector (".options1");
    notice.innerHTML =      `
    `
}