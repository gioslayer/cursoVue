//import { owners } from './data/heroes'
import superHeroes from '../data/heroes'

//console.log(owners)

//const [dc, marvel] = owners

//console.log(dc)
//console.log(marvel)

//console.log(superHeroes)

export const getHeroById = ( id ) => {
    return superHeroes.find(hero => hero.id === id)
}

//console.log(getHeroById(3))


export const getHeroesByOwner = ( owner ) => {
    return superHeroes.filter( hero => hero.owner === owner)
}

//console.log(getHeroesByOwner("Marvel"))
//console.log(getHeroesByOwner("DC"))

//export default opeHeroes