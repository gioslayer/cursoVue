console.log("Hola mundo");


const characters = ['Goku', 'Gohan', 'Trunks', 'Goten']

const [g, v, t, goten = 'Sin valor'] = characters

console.log([goten])

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['XYZ', 123])

console.log(letters, numbers)