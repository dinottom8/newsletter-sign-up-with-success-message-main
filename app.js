var inputEmail = (document.getElementById('inputEmail')).value;
var inputButton = document.getElementById('inputButton');

inputButton.addEventListener('onclick', verificar);

function verificar () {
    if (inputEmail == '') {
        document.getElementById("inputEmail").style.border = '1pt solid hsl(4, 100%, 67%)';
        document.getElementById("inputEmail").style.backgroundColor = 'hsl(4, 100%, 67%, 0.2)';        
        document.getElementById("mensagemErro").style.display = 'inline'
    } else {
        document.getElementById("main").style.display = 'none';
    }
}