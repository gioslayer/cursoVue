
console.log('Hola Gio, bienvenido a Vue!!')

const arreglo1 = [1,2,3,4]

arreglo1.push(5)

const arreglo2 = [...arreglo1]

arreglo2.push(6)

const arreglo3 = arreglo2.map(function(n){
    return n * 2
})

console.log(arreglo1)
console.log(arreglo2)
console.log(arreglo3)




