/*
PROGRAMA:
Pedir para o usuário digitar um número e mostrar a tabuada desse número de 0 a 1000
Deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente
*/

var mensagem = ''
var mostrarTAB = document.querySelector('div#mostrarTAB')

function calcularTAB() {
var nUsu = Number(prompt("Digite um número: "))
resetarTAB()

    for(let multi = 0; multi <= 1000; multi++) {
        mensagem += nUsu + ' x ' + multi + ' = ' + (nUsu * multi) + '<br>'
        
    }
        mostrarTAB.innerHTML = mensagem
    
}

function resetarTAB() {
    mensagem = ''
    mostrarTAB.innerHTML = mensagem
    
}
    

