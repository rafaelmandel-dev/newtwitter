const numeros = [2, 4, 6, 8]

numeros.forEach(multiplicaNumeros => numeros*2)

// const novosNumeros = numeros.map(multiplicaNumeros => {
//     return numeros * 2
// })

console.log(numeros)


//maneira supostamente que deveria ter sido feita
function dobrar(array){
    return array.map(x => x*2);
}

let resultado = dobrar([1, 2, 3]);
console.log(resultado)