/* Crie um programa para testar o resto da divisão inteira e numeros ao quadrado entre dois numeros

passos pedir numero para o usuario
pedir outro numero para o usuario
converter em numero o e salvar o dado

colocar no resultado o n1  % por n2 é o resultado

colocar no resultado o n1 ** a n2 é o resultado
*/

let n1 = Number(prompt('Digite um número'))
let n2 = Number(prompt('Digite outro número'))

let resultado = n1 % n2
let resultado2 = n1 ** n2 
alert(`O resto da divisão entre ${n1} e ${n2} é ` + (resultado) )
alert(`A potencia entre ${n1} e ${n2} é ` + (resultado2) )
