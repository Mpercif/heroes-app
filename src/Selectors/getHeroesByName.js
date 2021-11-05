import { heroes } from "../Data/Heroes"

export const getHeroesByName = (superhero = '') => {
    if(superhero === ''){
        return []
    }
    const name = superhero.toLocaleLowerCase()
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))

}
