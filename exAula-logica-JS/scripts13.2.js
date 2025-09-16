// mostrar na tela a soma dos números pares da Array



var produto = new Object()
produto.item = 'Luva'
produto.Tipo_de_luta = 'BOXE'
produto.quantidade_em_estoque = 6
produto.preco = 99.99

produto.comprar = function(qtd) {

    if(!qtd) {
        qtd = 1
    }

    if(produto.quantidade_em_estoque == 0) {
        console.log('PRODUTO ESGOTADO!')
    } else if(qtd > 0) {
    console.log('comprou luva')
        //this.quantidade_em_estoque--
        this.quantidade_em_estoque -= qtd
        console.log(this.quantidade_em_estoque)
    }

   
}

var msg = ''

msg += 'Item: ' + produto.item + '<br>'
msg += 'Tipo de luta: ' + produto.Tipo_de_luta + '<br>'
msg += 'Quantidade em estoque: ' + produto.quantidade_em_estoque + '<br>'
msg += 'Preço: ' + produto.preco


document.querySelector('div#output').innerHTML = msg