import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from 'axios';
import TourismTable from "./TourismTable"
import {SERVER_HOST} from "../config/global_constants"

export default class DisplayAttractions extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            tourism: []
        }
    }

    componentDidMount() {
        axios.get(`${SERVER_HOST}/tourism`)
   
        .then(res =>{
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else
                {           
                    console.log("Records read")   
                    this.setState({tourism: res.data}) 
                }   
            }
            else
            {
                console.log("Record not found")
            }
        })    



    }

    render()
    {
        return (           
            <div className="form-container">
                <div className="table-container">
                    <TourismTable tourism={this.state.tourism} /> 
                    <div className="add-new-attraction">
                        <Link className="blue-button" to={"/Add"}>Add New Attraction</Link>
               </div>
                </div>
            </div> 

        )


    }
}