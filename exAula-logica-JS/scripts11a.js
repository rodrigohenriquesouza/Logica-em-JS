/*
    PROGRAMA que peça para o usuário digitar 2 números que representam os lados de um retângulo. Mostrar na tela a área total de duas formas distintas: Num alert ou na div#output (dependendo do botão clicado). Esse código não precisa ser executado qunado a página é aberta.
*/



function mostrarAreaAlert() {
    var largura = Number(prompt('Digite a largura: '))
    var altura = Number(prompt('Digite a altura: '))

    try{
        var area = mostrarCalculo(largura, altura)
    } catch(e) {
        area = e
    }
 
        alert(`A área total é : ${area}`)
}

function mostrarAreaOutput() {
    var largura = Number(prompt('Digite a largura: '))
    var altura = Number(prompt('Digite a altura: '))

    try {
        var area = mostrarCalculo(largura, altura)
    } catch(e) {
        area = e
    }

     document.querySelector('div#output').innerHTML = `A área total é : ${area}`

}

mostrarAreaAlert()

function mostrarCalculo(l, a) {
    if(l == undefined || a == undefined) {
        throw new Error('calcularArea precisa receber dois números')
    }
    if(isNaN(l) || isNaN(a)) {
        throw new Error('Apenas números!')
    }
    return l * a
}