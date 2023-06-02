import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios"

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       const {data} = await axios.post(endpoint, character)
       try {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
       } catch (error) {
         throw Error(error)
       }
    };
 };
 

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      const {data} = await axios.delete(endpoint)
      try {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      } catch (error) {
         throw Error(error)
      }
    };
 };

export const filterCards = (gender)=>{
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (orden)=>{
    return {
        type: ORDER,
        payload: orden
    }
}

// .then(({ data }) => {
//    return dispatch({
//       type: ADD_FAV,
//       payload: data,
//    });
// });

// .then(({ data }) => {
//    return dispatch({
//       type: REMOVE_FAV,
//       payload: data,
// });
// });