import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

    
import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

import Home from './components/Home.js'


import DisplayAttractions from "./components/DisplayAttractions"


export default class App extends Component 
{
    render() 
    {
        
        return (

            <BrowserRouter>
            <div>        
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/tourism" component={DisplayAttractions}/>
              
            <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>}/>
              </Switch>

              <footer>
      
              </footer>
            </div>
      
            </BrowserRouter>
        )
    }
}
