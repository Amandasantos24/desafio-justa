// Desafio backend #Justa - Amanda Santos

// Números do desafio
const string = ["1, 2, 4, 13, 14","1, 3, 4, 13, 15"]
// Salva em um array a primeira string, assim separando os números
let primeiraString = string[0].split(", ")
// O filter passa por cada número do array que criamos 
// então ele pega a segunda string e verifica se tem nela cada número do array
let numComum = primeiraString.filter(numero => string[1].includes(numero))
// O que tiver ele retorna para o novo array que esta sendo feito
console.log(numComum)
