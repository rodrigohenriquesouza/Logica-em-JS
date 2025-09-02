// Crie um programa para calcular a média do aluno onde se ele tirar 5 ou abaixo de 5 ele é reprovado. O aluno tem 2 notas

var not1 = Number(prompt("Digite sua primeira nota "))
var not2 = Number(prompt("Digite sua segunda nota "))
var mediaaluno = (not1 + not2) / 2

if (mediaaluno <= 5 || not1 === 0 || not2 === 0) {
      alert("Você foi REPROVADO!")
} else {
   alert("Você foi APROVADO!")
}