/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function LandingPage(){
    return (
        <div>
            <h1>Mi app de food</h1>
            <NavLink to='/home'>
                <button>Ingresar</button>
            </NavLink>
        </div>
    )
}