import { GET_ALL_DOGS } from "../actions"


const initialState = {
    allDogs: [],
    allDogsError: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                allDogsError: action.payload
            };
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;