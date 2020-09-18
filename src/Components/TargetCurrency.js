import React from 'react'

function TargetCurrency(props) {
    return (
        <div className="forex">
            <button onClick={()=>{props.pressTargetKey('USD')}}>USD</button>
            <button onClick={()=>{props.pressTargetKey('EUR')}}>EUR</button>
            <button onClick={()=>{props.pressTargetKey('GBP')}}>GBP</button>
        </div>
    )
}

export default TargetCurrency
