// alert("aaaa")
// prompt("nome:")
// confirm("ctz?")

// var nome = prompt("nome");
// var idade = prompt("idade");
// var trabalho = prompt("trabalho"); 

// console.log(`olá ${nome}, você tem ${idade} anos e trabalha como ${trabalho}`)

function adição(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2

    console.log(`o resultado da soma é ${resultado}`);
}

function subtrair(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2
    
    console.log(`o resultado da subtração é ${resultado}`);
}

function multiplicar(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2

    console.log(`o resultado da multiplicação é ${resultado}`);
}