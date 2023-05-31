let btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    var num = document.querySelector('#num')
    var valor = document.querySelector('#valor')

    if (num.value.length == 0) {
        alert('Digite um valor para proseguir!')
    } else {
        var newNum = Number(num.value)
        var newValor = document.createElement('option')
        newValor.setAttribute('class', 'opt')
        newValor.text = `Valor ${newNum}`
        valor.appendChild(newValor)
        newNum.innerHTML = ''
    }
    num.value = ''
    num.focus()

    let btn2 = document.querySelector('#btn2')
    btn2.addEventListener('click', () => {
        let res = document.querySelector('#res')
        res.innerHTML = `Impresso: ${newValor.text}`
        newValor.innerHTML = ''
    })
})
