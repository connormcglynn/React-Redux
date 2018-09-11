import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render(){
        return (
            <div className="addNinja">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"><b> Name: </b></label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age"><b> Age: </b></label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt"><b> Belt: </b></label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button id="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;