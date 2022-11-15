import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

import DisplayAllCars from "./components/DisplayAllCars"

    
export default class App extends Component 
{
    render() 
    {
        return (
            <BrowserRouter>
                <Switch>                 
                    <Route exact path="/" component={DisplayAllCars} />
                    <Route exact path="/cars" component={DisplayAllCars}/> 
                    <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>}/>                         
                </Switch>
            </BrowserRouter>
        )
    }
}