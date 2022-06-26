console.log("Hola mundo");

//Desestructuracion de Objetos
const person = {
    name : 'Tony',
    age : 45,
    codeName : 'Iron man'
}

const { age, name, codeName } = person

console.log(name)
console.log(age)
console.log(codeName)


const createHero = ( { name, age, power = 'Sin poder' } ) =>
    ({
        id : 1256,
        name : name,
        age : age,
        power : power
    })

console.log( createHero( person ) )

