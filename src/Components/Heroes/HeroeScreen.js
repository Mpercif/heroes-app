import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../Helpers/heroImages'
import { getHeroesById } from '../../Selectors/getHeroesById'



export const HeroeScreen = ({history}) => {

    const { heroeId } = useParams()

    const hero = useMemo( () => getHeroesById(heroeId), [heroeId] )

    if(!hero){
        return <Redirect to="/" />
    }

    const {superhero,
        id,
        alter_ego,
        first_appearance,
        characters} = hero

    const handleReturn = ()=>{
        if(history.length <= 2){
            history.push("/")
        }else{
            history.goBack()
        }
    }

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        className="img-fluid rounded-start animate__animated animate__fadeInLeft" 
                        src={heroImages(`../${id}.jpg`).default} 
                        alt={id} 
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-tittle">{superhero}</h2>
                        <p className="card-text"><span style={{fontWeight: "bold" }}>Primera aparición: </span>{first_appearance}</p>
                        <hr />
                        <p className="card-text"><span style={{fontWeight: "bold" }}>Alter Ego: </span>{alter_ego}</p>
                        <hr />
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">
                                <span style={{fontWeight: "bold" }}>characters: </span>
                                 <small className="text-muted">{characters}</small>
                                </p>
                        }
                        <button 
                            className="btn btn-outline-primary"
                            onClick={handleReturn}
                        > 
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
