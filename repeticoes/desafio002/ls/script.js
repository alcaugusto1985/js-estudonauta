let btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    let num = Number(document.querySelector('#tab').value)
    let area = document.querySelector('#res').value

    if (num == '') {
        alert('Digite um valor para continuar!')
    } else {
        for (let i = 0; i <= 10; i++) {
            res.innetHTML += `${num} x ${i} = ${num * i}`
        }
    }
})
