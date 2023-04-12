// Code Keypad Component Here
import React from 'react'
import EyesOnMe from "./EyesOnMe"

function Keypad (){

function changeEvent(){
    console.log("Entering password...")
}
    return (
        <input type="password" onChange = {changeEvent}> 
        </input>
    )
}

export default Keypad;