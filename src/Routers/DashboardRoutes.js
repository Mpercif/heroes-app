import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../Components/DC/DcScreen'
import { HeroeScreen } from '../Components/Heroes/HeroeScreen'
import { MarvelScreen } from '../Components/Marvel/MarvelScreen'
import { SearchScreen } from '../Components/Search/SearchScreen'
import { Navbar } from '../Components/Ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-1">
                <Switch >
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route exact path="/heroe/:heroeId" component={HeroeScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>            
        </>
    )
}
