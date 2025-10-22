import React, { Component, useState } from 'react';

class ControlledClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'd',
            email:'sh@test.com'
        };
    }
    handleChanges = (event) => {
        console.log(event.target);
        this.setState({ 
            [event.target.name]: event.target.value.toUpperCase() 
        });
    }
    handleForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        // console.log(event.target[0].value.toUpperCase());
        // this.setState({ 
        //     [event.target.name]: event.target[0].value.toUpperCase() 
        // });
    }
    render() {
        return (
            <div>
                <h2>Controlled Class Form Component</h2>
                <form  onSubmit={this.handleForm}>
                <input
                    type="text"
                    name="name"
                    value={this.state.name.toUpperCase()}
                    onChange={this.handleChanges}
                />
                <input
                    type="email"
                    name="email"
                    value={this.state.email.toUpperCase()}
                    onChange={this.handleChanges}
                />
                <button type="submit">Submit</button>
                </form>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
            </div>
        );
    }
}

export default ControlledClassForm;