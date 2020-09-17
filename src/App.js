import React, { Component } from 'react';
import { connect } from 'react-redux'

import StudentForm from './StudentForm'


class App extends Component {

    render() {
        return (
            <div>
                {this.props.students.length ? this.props.students.map(student => <h1>{student.name}</h1>) : <h1>No Students Currently</h1>}
                <StudentForm />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addStudents: (student) => dispatch(addStudent(student))
//     }
// }

export default connect(mapStateToProps)(App);

//mapStateToProps => this.props.students