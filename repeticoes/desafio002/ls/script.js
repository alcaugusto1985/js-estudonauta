let btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    let num = Number(document.querySelector('#tab').value)
    let res = document.querySelector('#res')

    if (num == '') {
        alert('Digite um valor para continuar!')
    } else {
        res.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let obj = document.createElement('option')
            obj.text = `${num} x ${i} = ${num * i}`
            res.appendChild(obj)
        }
    }
})
