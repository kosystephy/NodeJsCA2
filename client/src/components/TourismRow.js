import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class TourismRow extends Component 
{    
    render() 
    {
        return (
            <tr>
                <td>{this.props.tourism.name}</td>
                <td>{this.props.tourism.telephone}</td>
                <td>{this.props.tourism.address.addressRegion}</td>
                <td>{this.props.tourism.addressLocality}</td>
   <td>
                    <Link className="green-button" to={"/EditAttraction/" + this.props.tourism.geo}>Edit</Link>                    
                    <Link className="red-button" to={"/DeleteAttraction/" + this.props.tourism.geo}>Delete</Link>   
                </td>
            </tr>
        )
    }
}