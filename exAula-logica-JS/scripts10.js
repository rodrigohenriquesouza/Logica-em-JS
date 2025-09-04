/*
        Programa
Deve pedir assim que o usuário entrar na página um número
Depois devo usar esse número para fazer ou uma soma ou uma subtração ou uma multiplicação ou uma divisão com outro número
*/

var nUsuario = Number(prompt('Digite seu número: '))
escrever()

function escrever() {
    var contaUsuario = document.querySelector('#conta')
    contaUsuario.innerHTML = nUsuario
}

function somar() {
    var n = Number(prompt('Digite outro número: '))
    nUsuario += n
    escrever() 
}

function subtrair() {
    var n = Number(prompt('Digite outro número: '))
    nUsuario -= n
    escrever()
}

function multiplicar() {
    var n = Number(prompt('Digite outro número: '))
    nUsuario *= n
    escrever()
}

function divisao () {
    var n = Number(prompt('Digite outro número: '))
    nUsuario /= n
    escrever()
}