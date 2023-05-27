const btn = document.querySelector('#btn').addEventListener('click', () => {
    let date = new Date()
    let newDate = date.getFullYear()
    let inpAno = Number(document.querySelector('#ano').value)
    let inpSexoM = document.querySelector('#sexoM').value
    let inpSexoF = document.querySelector('#sexoF').value 
    let msg = document.querySelector('#msg')
    let foto = document.querySelector('#foto')
    let age = newDate - inpAno

    
})