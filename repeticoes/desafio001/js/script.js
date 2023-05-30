const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passo = Number(document.querySelector('#passo').value)
    let res = document.querySelector('#res')

    if (inicio == '' || fim == '' || passo == '') {
        alert('Por favor, preencha todos os campos!')
    } else {
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML = `${i}`
            console.log(res)
        }
    }
})
