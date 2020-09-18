import React, {useRef} from 'react'

function Input(props) {
    
    return (
        <div className="convert-input">
            <input type="text" placeholder='Enter the value here' onChange={props.onInputChange}></input>
        </div>
    )
}

export default Input
