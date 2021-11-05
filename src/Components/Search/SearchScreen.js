import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useForm } from '../../Hooks/useForm';
import { HeroeCard } from '../Heroes/HeroeCard';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../Selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const {search}  = useLocation()

    const {q = ''} = queryString.parse(search)

    const [{hero}, handleInputChange] = useForm({hero: q})

    const heroesFiltered =  useMemo(() =>getHeroesByName(q), [q])

    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${hero}`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            autoComplete='off'
                            type="text"
                            name="hero"
                            value={hero}
                            placeholder="Find your hero !"
                            className="form-control"
                            onChange={handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Search...
                        </button>

                    </form>

                </div>

                <div className="col-7">

                    <h4>Results...</h4>
                    <hr />

                    {
                        (q === '') 
                            ? 
                                <p className='alert alert-info'>Busca un heroe...</p> 
                            :
                                (heroesFiltered.length === 0) && 
                                    <p className='alert alert-info'>No se encontro el heroe con {q}</p>
                    }

                    {
                        heroesFiltered.map(hero =>(
                            <HeroeCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}
