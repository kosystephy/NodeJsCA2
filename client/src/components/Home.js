import React, {Component} from "react"
import axios from "axios"
import TourismTable from "./TourismTable"

export default class Home extends Component 
{
    
  
    render() 
    {   
        return (           
            <div className="form-container">
                <div className="table-container">
                    <h1>This is the home page</h1>
                </div>
            </div> 
        )
    }
}