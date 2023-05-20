import { GET_RECIPES, FILTER_BY_TYPEDIET, FILTER_CREATED, 
ORDER_BY_NAME, ORDER_BY_PUNTUATION, GET_BY_NAME, GET_BY_ID, GET_TYPE_DIETS, DELETE_RECIPE, } from './action-types'
import axios from 'axios';

export const getRecipes = () => {
    return async function(dispacth){
        var json = await axios.get("http://localhost:3001/recipes", {
        });
        return dispacth({
            type: GET_RECIPES,
            payload: json.data
        }) 
    }
}


export function filterRecipesByTypeDiet (payload){
    return {
        type : FILTER_BY_TYPEDIET,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}


export function orderByName (payload){
    return {
        type : ORDER_BY_NAME,
        payload
    }
}

export function orderByPuntuation (payload){
    return {
        type : ORDER_BY_PUNTUATION,
        payload
    }
}

export function getRecipesByName (name){
    return async function(dispatch){
        await axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then((response) =>{
            return dispatch({type: GET_BY_NAME, payload: response.data})
            }).catch((error) =>{
            alert("Recipe not found")
            })
    } 
}

export function getRecipesById (id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/recipes/${id}`);
    return dispatch( {
        type : GET_BY_ID,
        payload: json.data
    })
}
}

export function getTypeDiets (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/diets");
        return dispatch( {
            type : GET_TYPE_DIETS,
            payload: json.data
        })

    }
}

export function postRecipes (payload){
    return async function(dispatch){
        var json = await axios.post(`/recipe`,payload);
        return json
    }
}


export function deleteRecipes (id){
    return async function(dispatch){
        var json = await axios.delete(`/recipe/${id}`);
        return dispatch({
            type : DELETE_RECIPE,
            payload: json.data
        })
    }
    
}