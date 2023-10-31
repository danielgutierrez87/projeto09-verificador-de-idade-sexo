function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value < 1920 || fano.value > ano) {
        window.alert('ERRO!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-masc.jpg')
            } else if (idade < 19) {
                img.setAttribute('src', 'imagens/jovem-mas.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-mas.jpg')
            } else {
                img.setAttribute('src', 'imagens/velho-mas.jpg')
            }

        } else if (fsex[1].checked) { 
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-fem.jpg')
            } else if (idade < 19) {
                img.setAttribute('src', 'imagens/jovem-fem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-fem.jpg')
            } else {
                img.setAttribute('src', 'imagens/velho-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br><br>`
        res.appendChild(img)
    }
}