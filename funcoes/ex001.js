function parimp(n) {
    if(n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let num = 8
let res = parimp(num)

console.log(`O número ${num} é ${res}`)
