import React, { useState, useEffect } from 'react'
import "./styles/header.css"




function Header(props){



    return(
        <>
        <nav>
            <h1>Current conditions for {props.city}</h1>
            
        </nav>
        </>


    )




}

export default Header