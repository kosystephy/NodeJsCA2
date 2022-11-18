import React, {Component} from "react"
import Form from "react-bootstrap/Form"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"

import LinkInClass from "../components/LinkInClass"

import {SERVER_HOST} from "../config/global_constants"

export default class ModifyTourism extends Component 
{
    constructor(props) 
    {
        super(props)

        this.state = {
            name: ``,
            telephone: ``,
            region: ``,
            location: ``,
            redirectToDisplayAttractions:false
        }
    }

    componentDidMount() 
    {      
        this.inputToFocus.focus()
  
        axios.get(`${SERVER_HOST}/cars/${this.props.match.params.geo}`)
        .then(res => 
        {     
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else
                { 
                    this.setState({
                        name: res.data.name,
                        telephone: res.data.telephone,
                        region: res.data.region,
                        location: res.data.location
                    })
                }
            }
            else
            {
                console.log(`Record not found`)
            }
        })
    }


    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) => 
    {
        e.preventDefault()

        const tourismObject = {
            name: res.data.name,
            telephone: res.data.telephone,
            region: res.data.region,
            location: res.data.location
        }

        axios.put(`${SERVER_HOST}/cars/${this.props.match.params.geo}`, tourismObject)
        .then(res => 
        {             
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else
                {      
                    console.log(`Record updated`)
                    this.setState({redirectToDisplayAttractions:true})
                }
            }
            else
            {
                console.log(`Record not updated`)
            }
        })
    }

    
    render() 
    {  
        return (
            <div className="form-container">
    
                {this.state.redirectToDisplayAttractions ? <Redirect to="/DisplayAttractions"/> : null}  
                        
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref = {(input) => { this.inputToFocus = input }} type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="telephone">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="text" name="telephone" value={this.state.telephone} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="region">
                        <Form.Label>Region</Form.Label>
                        <Form.Control type="text" name="region" value={this.state.address.addressRegion} onChange={this.handleChange} />
                    </Form.Group>
        
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="location" value={this.state.address.addressLocality} onChange={this.handleChange} />
                    </Form.Group>
  
                    <LinkInClass value="Update" className="green-button" onClick={this.handleSubmit}/>  
    
                    <Link className="red-button" to={"/Displayattractions"}>Cancel</Link>
                </Form>
            </div>
        )
    }

}

