var numeros = [1, 2, 3, 5, 2, 16, 38, 100, 240, 13]
var output = document.querySelector('div#output')

var somaDosPares = somaOsPares(numeros)

output.innerHTML = 'A soma é: ' + somaDosPares

function somaOsPares(arr) {
    var soma = 0
    for(let i = 0; i < arr.length; i++) {

      if(arr[i] % 2 == 0) {
        soma += arr[i]
    }
}
    return soma
}
