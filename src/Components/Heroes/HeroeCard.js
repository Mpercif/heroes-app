import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../Helpers/heroImages'


export const HeroeCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <div className="card mb-3" style={ {maxWidth: 350} } >
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        className="img-fluid rounded-start" 
                        src={heroImages(`./${id}.jpg`).default} 
                        alt={id}    
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-tittle">{superhero}</h5>
                        <p className="card-text">{first_appearance}</p>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text"><small className="text-muted">{characters}</small></p>
                        }
  
                        <Link to={`./heroe/${id}`} >
                            Leer mas...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
