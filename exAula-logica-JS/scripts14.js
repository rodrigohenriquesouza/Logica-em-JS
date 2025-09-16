var produtos = [{'nome': 'caneta', 'estoque': 9, 'preco': 2},{'nome': 'lapis', 'estoque': 7 , 'preco': 1.2},{'nome': 'borracha', 'estoque': 15,  'preco': 0.5}
]

var msg = ''

for(var i = 0; i < produtos.length; i++) {
    console.log(produtos[i].preco)

    msg += '<h2>Produto: ' + produtos[i].nome + '</h2>'
    msg += '<p>Preço: R$ ' + produtos[i].preco + '</p>'
    msg += '<p>Estoque: ' + produtos[i].estoque + '</p>'
}

document.querySelector('div#output').innerHTML = msg