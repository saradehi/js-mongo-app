import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS'

export const getAllDogs = () => {
    // return async function(dispatch){
    //     const response = await axios('http://localhost:3001/cards')
    //     return dispatch({type: GET_ALL_DOGS, payload: response.data})
    // }

    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/cards');
            return dispatch({ type: GET_ALL_DOGS, payload: response.data });
        } catch (err) {
            return err.response;
        }
    }
}