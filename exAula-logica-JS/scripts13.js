var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

let hoje = new Date()
let diaSemana = hoje.getDay() // retorna o dia atual da semana

alert(`Bem vindo hoje é ${dias[2]} feira ${diaSemana} dia da semana `)