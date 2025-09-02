/*  PROGRAMA
fazer jogador 1 digitar um numero
fazer jogador 2 digitar outro numero
se foram iguais mostrar empate
sortear um numero entre 0 e 1
se o numero sorteado for 0, ganha quem escolher o numero MENOR
se o numero sorteado for 1, ganha quem escolher o numero MAIOR
*/

var jogador1 = Number(prompt("Digite seu número jogador 1"))
var jogador2 = Number(prompt("Digite seu número jogador 2"))
    if(jogador1 === jogador2) {
        alert("EMPATE!")     
    } else {
var sorteio = parseInt(Math.random () * 2)
        alert('Numero sorteado: ' + sorteio)
    if( (sorteio === 0 && jogador1 < jogador2) || sorteio === 1 && jogador1 > jogador2) {
        alert("Jogador 1 GANHOU!")
    } else {
        alert("Jogador 2 GANHOU!")
    }
} 

    