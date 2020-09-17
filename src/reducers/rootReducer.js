const initialState = {
    students: []
}

//reducers are functions
export const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            return {...state, students: [...state.students, action.payload]}
        default:
            return state;
    }
}


//actions are objects: property of type(reqd), payload => the data 

// { type: 'ADD_STUDENT', payload: 'aysan'} => action.payload