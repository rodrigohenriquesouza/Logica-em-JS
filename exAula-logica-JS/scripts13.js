var dias = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
var data = new Date()
var diaDaSemana = data.getDay()

alert(`Bem-vindo hoje é o ${diaDaSemana} dia da semana ` + dias[5])