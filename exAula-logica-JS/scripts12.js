var mugiwaras = ['Zoro', 'Luffy', 'Loki', 'Nami', 'Robin', 'Brook', 'Jinbe', 'Sanji', 'Ussop', 'Chopper', 'Franky']
mugiwaras.push('Vivi')
var supernovas = ['Trafalgar D. Law', 'Monkey D. Luffy', 'Eustass Kid']

var output = document.querySelector('div#output')

var msg = ''

function Cleam() {
    var Limpar = document.querySelector('div#output')
    Limpar.innerHTML = ''
}

function MostrarMugi() {
    msg = ''
    for (var i = 0; i < mugiwaras.length; i++) {
    msg += 'Mugiwara favorito: ' + (i + 1) + ': ' + mugiwaras[i] + '<br>'
}
output.innerHTML =  msg

}

function MostrarSP() {
    msg = ''
    for(let i = 0; i < supernovas.length; i++) {

        msg += 'Supernova: ' + (i + 1) + ': ' + supernovas[i] + '<br>'
    }
    output.innerHTML = msg
}

