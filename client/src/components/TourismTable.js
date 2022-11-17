import React, {Component} from "react"
import TourismRow from "./TourismRow"



export default class TourismTable extends Component 
{
    render() 
    {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Telephone</th>
                        <th>Region</th>
                        <th>Location</th>
                        <th> </th>
                    </tr>
                </thead>
                  
                <tbody>
                    {this.props.toursim.map((car) => <TourismRow key={tourism.geos} tourism={tourism}/>)}
                </tbody>
            </table>      
        )
    }
}