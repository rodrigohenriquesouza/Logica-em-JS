var produtos = new Array('Papel', 'Lapis', 'Caneta', 'Folha', 'Caderneta')
produtos.push('Livro', 'Apagador', 'Compasso')

var msg = ''
var output = document.querySelector('div#output')

for(var i = 0; i < produtos.length; i++) {
    msg += 'produto ' + (i + 1) + ': ' + produtos[i] + '<br>'
}

output.innerHTML = msg