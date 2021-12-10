function clicar() {
    var inicio = document.getElementById('in')
    var fim = document.getElementById('fi')
    var passo = document.getElementById('pa')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
        window.alert('[ERRO] Verifique os dados inseridos.')
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO igual a 1.')
            p = 1
        }
        if (i < f) {
            //Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Decrescente
            for(var c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}