import { heroes } from "../Data/Heroes";

export const  getHeroesById = (id)=>{

    return heroes.find(heroe => heroe.id === id)
}