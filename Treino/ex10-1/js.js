function clicar () {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('age')
    var res = document.getElementById('res')
    var idade = Number(nasc.value)
    var resu = ano - idade
    res.innerHTML = `${resu}`
}