// arrays

// function somar(numero1, numero2) {
//     let resultado = numero1 + numero2
//     return resultado
// }

// const somar = (numero1, numero2) => {
// }

// function mostrarResult() {
//     let resultadoSoma = somar(5, 10)
//     console.log(resultadoSoma)
// }

// uma estrutura que guarda varias informaoes
const times = ["mclaren", "redbull", "ferrari"]

//modificar um item da array
times[2] = "ifeifeufb"

//adicionar itens no final na array
times.push("difnid")

//add no finicio da array
times.unshift("sifndif")

//remover o ultimo elemento
times.pop()

//remover primeiro elemento
times.shift()

//remover algo espcifico
times.slice(2,1)

//verificar se tem algum valor no array
times.includes("asas")

//arrow function => para diminuir o tamanho das funções
times.forEach(pegaNomes => console.log(pegaNomes))

//arrow function => com if ternario
times.forEach(pegaNomes => pegaNomes==="caio"? console.log(pegaNomes): console.log("nao"))

const novosTimess = times.map( numeNomes => ((mudaNomes)))

//filtar

const nomesFiltrados = omes.filter(pegaNomes => pegaNomes.includes("a"))