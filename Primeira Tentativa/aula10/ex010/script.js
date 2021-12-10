function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = "exemplo.png"
        document.body.style.background = '#e2cd91'
    } else if (hora >= 12 && hora < 18) {
       //Boa Tarde!
       img.scr = src="exemplo.png"
       document.body.style.background = '#b9846f'
    } else {
        //Boa Noite!
        img.src = "exemplo.png"
        document.body.style.background = '#515154'
    }
}