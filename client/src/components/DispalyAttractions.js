import React, {Component} from "react"
 
import TourismTable from "./TourismTable"
import axios from 'axios';
import {SERVER_HOST} from "../config/global_constants"

export default class Displayattractions extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            tourism: []
        }
    }

    componentDidMount() {
        axios.get("json/tourism.json")
   
        .then(res =>{
        console.log(res)
        this.setState({tourism: res.data})
        })    



    }

    render()
    {
        return (           
            <div className="form-container">
                <div className="table-container">
                    <TourismTable tourism={this.state.tourism} /> 
                </div>
            </div> 

        )


    }
}