/*var num = [8, 8, 9, 3, 2, 4, 5]
for (let index = 0; index < num.length; index++) {
      console.log(`A posição ${index} tem o valor ${num[index]}.`)
}*/
//-------------------------------------------------------------------
/*var a1 = [1, 2, 3, 4]
for (let n1 = 0; n1 < a1.length; n1++) {
    console.log(`${n1} tem o valor ${a1[n1]}`)
}*/
//-------------------------------------------------------------------
var a1 = [1, 2, 3, 4]
for (let index in a1){
    console.log(`${index} tem o valor ${a1[index]}`)
}
var pos = a1.indexOf(5)
if (pos == -1) {
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor está na posição ${pos}.`)
}