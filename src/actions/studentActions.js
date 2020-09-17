//action creator is just a function that returns an action


export const addStudent = (student) => {
    return {
        type: 'ADD_STUDENT',
        payload: student
    }
}