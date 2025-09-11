/*
        Programa
Deve pedir assim que o usuário entrar na página um número
Depois devo usar esse número para fazer ou uma soma ou uma subtração ou uma multiplicação ou uma divisão com outro número
*/

var numero = Number(prompt('Digite seu numero: '))
escreve(numero)



function iniciarCalculo(simbolos){
        var n = Number(document.querySelector('div#output').innerHTML)
        var numero = Number(prompt('Digite outro número: '))

        try {
                var resultado = calculos(simbolos, n, numero)
        } catch(e) {
                alert(e)
                return
        }

        escreve(resultado)
}

function escreve(mensagem) {
        var output = document.querySelector('div#output')
        output.innerHTML = mensagem
}

function calculos(simbolos, n, numero) {

        if(simbolos !== '+' && simbolos !== '-' && simbolos !== '*' && simbolos !== '/') {
                alert('Digite um simbolo válido')
                return 0
        }

        if(isNaN(n) || isNaN (numero)) {
                throw new Error('ISSO NÃO É UM NÚMERO')
        }

 let numerocalculado = null

        switch(simbolos) {
                case '+':
                        numerocalculado = n + numero
                        break
                case '-':
                        numerocalculado = n - numero
                        break
                case '*':
                        numerocalculado = n * numero
                        break
                case '/':
                        numerocalculado = n / numero
                        break
        }

        return numerocalculado
}