var hora = 13
console.log(`São ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia.')
} else if (hora >= 12 && hora < 19) {
    console.log('Boa tarde.')
} else if (hora >=19 && hora < 24) {
    console.log('Boa noite.')
} //Essa foi a minha forma de escrever o código.

/*
Fora do professor, após a explicação.
O único problema dessa forma é que uma vez 
com as informações da hora sendo inseridas manualmente
se o usuário puser 25, por exemplo o código vai interpretar
como Boa Noite.
if (hora < 12) {
    console.log('Bom dia.')
} else if (hora <= 18) {
    console.log('Boa tarde.')
} else {
    console.log('Boa noite.')
}
*/
