import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addStudent } from './actions/studentActions'

class StudentForm extends Component {

    state = { name: '' }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStudent({name: this.state.name})
        //we're going to want to update our store state
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.name} onChange={this.handleChange}/>
                <input type='submit' value='Add Student' />
            </form>

        );
    }
}

export default connect(null, { addStudent })(StudentForm);