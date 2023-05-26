let getHours = () => {
    let now = new Date()
    let hours = now.getHours()
    let hour = hours < 10 ? `0${hours}` : hours
    let minutes = now.getMinutes()
    let minute = minutes < 10 ? `0${minutes}` : minutes
    let seconds = now.getSeconds()
    let second = seconds < 10 ? `0${seconds}` : seconds
    let corpo = document.querySelector('#corpo')
    let cima = document.querySelector('#cima')
    let img = document.querySelector('#img')

    if (hours == 0 && hours < 12) {
        cima.innerHTML = 'Bom dia! <br>'
        cima.innerHTML += `Agora são ${hour}:${minute}:${second}`
        corpo.style.backgroundColor = '#E0B511'
        img.src = 'imagens/manha-novo.png'
    } else if (hours >= 12 && hours < 18) {
        cima.innerHTML = 'Boa tarde! <br>'
        cima.innerHTML += `Agora são ${hour}:${minute}:${second}`
        corpo.style.backgroundColor = '#81a5b7'
        img.src = 'imagens/tarde-novo.png'
    } else if (hours >= 18 && hours < 24) {
        cima.innerHTML = 'Boa noite! <br>'
        cima.innerHTML += `Agora são ${hour}:${minute}:${second}`
        corpo.style.backgroundColor = '#0E2144'
        img.src = 'imagens/noite-novo.png'
    }
}

setInterval(() => {
 getHours()
}, 1000)
