// pedir para o usuario digitar um numero
// converter o numero em inteiro

// pedir para o usuario digitar outro numero
// converter em numero inteiro

//mostrar a subtração concatenando com o texto 'a subtração é: ...'
//mostrar a multiplicação concatenando com o texto 'a multiplicação é: ...'
//mostrar a divisão concatenando com o texto 'a divisão é...'
//mostrar a soma concatenando com o texto 'a soma é ...

var n1 = Number(prompt('Digite um número'))

var n2 = Number(prompt('Digite outro número'))

alert(`A subtração entre ${n1} e ${n2} é: ` + (n1 - n2) ) 
alert(`A multiplicação entre ${n1} e ${n2} é: `  + (n1 * n2) )
alert(`A divisão entre ${n1} e ${n2} é: ` + (n1 / n2) )
alert(`A soma entre ${n1} e ${n2} é: ` + (n1 + n2) )