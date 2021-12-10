function carregar() {
    var a1 = new Date()
    var a2 = a1.getHours()
    var a3 = document.getElementById('n1')
    var a4 = document.getElementById('n2')
    var a5 = document.getElementById('n3')
    if (a2 >= 0 && a2 < 12) {
        a3.innerHTML = `São ${a2} horas.<br>Bom dia!`
        document.body.style.background = '#e2cd9f'
        img.src = 'exemplo.png'
    } else if (a2 >= 12 && a2 < 19) {
        a3.innerHTML = `São ${a2} horas.<br>Boa Tarde!`
        document.body.style.background = '#b9846f'
        img.src = 'exemplo.png'
    } else {
        a3.innerHTML = `São ${a2} horas.<br>Boa Noite!`
        document.body.style.background = '#515154'
        img.src = 'exemplo.png'
    }
}

/*Editar as fotos deu mais trabalho que montar os códigos,
deicdi deixar essa genérica e é isso.*/