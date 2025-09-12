var nUsuario = Number(prompt('Digite um número: '))
escrever(nUsuario)


function iniciarCalculo(simbolos) {
        var n = Number(document.querySelector('div#output').innerHTML)
        var nUsuario = Number(prompt('Digite outro número: '))

        try {
                var conta = calculos(simbolos, n, nUsuario)
        } catch(e) {
                alert(e)
                return
        }

        escrever(conta)
}


function escrever(mensagem) {
        var resultado = document.querySelector('div#output')
        resultado.innerHTML = mensagem
}

function calculos(simbolos, n, nUsuario) {

        if(simbolos !== '+' && simbolos !== '-' && simbolos !== '*' && simbolos !== '/') {
                throw new Error('NÃO É UM SIMBOLO VÁLIDO')
        }

        if(isNaN(n) || isNaN(nUsuario)) {
                throw new Error('IMPOSSÍVEL OPERAR!')
        }

        var nOperado = null

        switch(simbolos) {
                case '+':
                        nOperado = n + nUsuario
                        break
                case '-':
                        nOperado = n - nUsuario
                        break
                case '*':
                        nOperado = n * nUsuario
                        break
                case '/':
                        nOperado = n / nUsuario
                        break
        }
        
        return nOperado
}