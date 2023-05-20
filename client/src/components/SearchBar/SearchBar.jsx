import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getRecipesByName } from "../../redux/actions";

export default function SearchBar () {
    const dispacth = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange (event) {
        event.preventDefault()
        setName(event.target.value)
    }
    
    function handleSubmit (event) {
        event.preventDefault()
        if (name.trim() !== "") {
            dispacth(getRecipesByName(name))
        }
    }
    return (
        <div>
            <input 
                type= 'text'
                placeholder="Buscar..."
                onChange={(event)=> handleInputChange(event)}
            />
            <button type="submit" onClick={(event)=>handleSubmit(event)} >Search</button>
        </div>
    )
}