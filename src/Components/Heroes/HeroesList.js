import React, {useMemo } from 'react'
import { getHeroesByPublisher } from '../../Selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row ">
            {
                heroes.map(hero => (
                    <HeroeCard key={hero.id} {...hero}  />
                ))
            }
        </div>
    )
}
