import React from 'react'
import { HeroesList } from '../Heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DcScreen</h1>
            <hr />
            <HeroesList publisher={'DC Comics'} />
        </div>
    )
}
