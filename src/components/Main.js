import React from 'react'
import Header from './Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'


const Main = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route to="/" exact>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Main
