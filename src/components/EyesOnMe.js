// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe (){
    
function whenFocus(){
    console.log("Good!")
}

function whenBlur(){
    console.log("Hey! Eyes on me!")
}
    
    return (
        <button onFocus = {whenFocus} onBlur = {whenBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;