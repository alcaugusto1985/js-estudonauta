function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.langth == 0 || Number(fano.value) > ano) {
        alert('[ERRO] - Digite um ano válido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/menino-bebe-250.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/menino-adolescente-250.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto-250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso-250.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/menina-bebe-250.png')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/menina-adolescente-250.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta-250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa-250.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos de idade.`
        res.appendChild(img)
        
    }
}