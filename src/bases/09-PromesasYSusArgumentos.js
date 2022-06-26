import { getHeroById } from './bases/08-export_import'
//console.log('Hola Mundo')

//new Promise( (resolve, reject) => {
//    console.log('Cuerpo de la promesa')
    //resolve('Promesa Resuelta')
//    reject('Promesa Resuelta con error')
//})
//.then(msg => console.log(msg))
//.catch(err => console.log(err))

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById( id )
            if(hero){
                resolve(hero)
            }else{
                reject('Hero no exists')
            }
        }, 1000);
    });
}

getHeroByIdAsync(3)
    .then( h => console.log(h.name))
    .catch(console.log)