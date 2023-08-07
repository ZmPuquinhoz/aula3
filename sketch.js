//código de alerta confirm e prompt simples
/*window.alert('Meu primeiro alerta') //cria alerta
window.confirm('Está gostando do curso?') //confirmação
window.prompt('Qual seu nome?') //caixa de pergunta (não aparece na tela)

//variaveis e concatenção
var nome = window.prompt('qual seu nome?') //var guarda o nome
window.alert('Seja Bem Vindo' + nome + '!') //concatenação da var com uma string*/

/*var n1 = Number(prompt ('Digite um numero para uma soma'))
var n2 = Number(prompt ('Digite outro número para somar com o numero anterior'))
var s = n1 + n2
var s = window.alert ('A soma dos 2 números é ' + s)

var nome = window.prompt ('qual seu nome?') //var guarda o nome
Document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras <br>`)
//document.write escreve, placeholder precisa ser em crase
Document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}<br>`)
Document.write(`Seu nome em minusculo é ${nome.toUpper()}<br>`)*/

function somar() {
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var resultado = document.getElementById("res");
    num1 = Number(num1)
    num2 = Number(num2)
    res = num1 + num2
    resultado.innerHTML = (`o resultado da soma é ${num1} + ${num2} é igual a: ${res}`)

}

