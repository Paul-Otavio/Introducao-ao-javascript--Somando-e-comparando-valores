function somar() { 
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var res = document.getElementById('res')
var n1 = Number(num1.value)
var n2 = Number(num2.value)
var soma = n1 + n2 
    if( soma >= 10) {
        var iguais = 'que é maior que 10' 
    } else{
        var iguais = 'que é menor que 10'
    } if (soma >= 20) {
        vinte = 'que é maior que 20'
    } else {
        vinte = 'que é menor que 20'
    } if ( n1 === n2) {
        var logico = 'são iguais'
    } else {
        var logico = 'não são iguais'
    }

    res.innerHTML = `Os número ${n1} e ${n2} ${logico}, a soma entre ${n1} e ${n2} é igual a ${soma}, ${iguais} e ${vinte}`
}
