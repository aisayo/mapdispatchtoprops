const initialState = {
    students: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            return {...state, students: [...state.students, action.payload]}
        default:
            return state;
    }
}

export default rootReducer;