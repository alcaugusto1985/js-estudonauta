let valores = [2, 5, 8, 3, 6, 4]

valores.push(1)
valores.push(7)

console.log(valores)

valores.sort()

console.log('=====================================')

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('=====================================')

for(let val in valores) {
    console.log(`A posição ${val} tem o valor ${valores[val]}`)
}

console.log('======================================')

//Identificar a posição do índice 3
//Após o comando sort, a posição esperada e a 2
let value = valores.indexOf(3)
console.log(value)
