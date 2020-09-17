import React, { Component } from 'react';
import {connect} from 'react-redux'

import addStudent from './actions/studentActions'

class App extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'ADD_STUDENT', payload: 'Aysan'})
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    debugger;
    return {

    }

}



export default connect(mapStateToProps, mapDispatchToProps)(App);