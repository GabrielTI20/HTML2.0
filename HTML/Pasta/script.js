// getElementById puxa e armazena o valor dentro de uma variavel
// addEventListener reconhece o click do batão
// document puxa a informação
// parseInt () -> converte de String(texto) para número tipo inteiro 
// parseFloat () -> converte de Stringo(Texto) para numero decimais(Numeros quebrados com virgula)

const variavelConstante = "Paulo"

const botaoAt1 = document.getElementById('somar')
botaoAt1.addEventListener('click', () => {
    const numero1at1 = document.getElementById('numero1at1').value
    const numero2at1 = document.getElementById('numero2at1').value
    
    const soma = parseInt (numero1at1) + parseInt (numero2at1)
    
    alert(soma)
})

function nomeDaFuncao(){
    const  numero1 = parseInt(document.getElementById('numero1at1').value)
    const  numero2 = parseInt(document.getElementById('numero1at1').value)
    
    conta= numero1 + numero2 
    
    alert(conta)
    
    // return conta
}

function nomeDaFuncao1(nome,idade, sala){

    alert('O nome do aluno é ' +  nome + ' ele tem ' + idade + ' estuda na sala ' + sala) 
    
}

