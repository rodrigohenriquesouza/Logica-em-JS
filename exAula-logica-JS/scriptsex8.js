/*
Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 a 1000
*/

var numero = Number(prompt('Digite um número: '))

for(let i = 0; i <= 1000; i++ ) {
    document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<br>')
        if(i % 10 == 0 && i > 0) {
            document.write('<hr>')
        }
}
    
        
    document.writeln("FIM DO LOOP!")