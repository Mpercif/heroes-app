import { heroes } from "../Data/Heroes";

export const  getHeroesByPublisher = (publisher)=>{
    
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no valido`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}