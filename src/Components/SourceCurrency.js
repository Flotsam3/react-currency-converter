import React from 'react'

function SourceCurrency(props) {
    const handleBTN = (e)=>{
        props.pressSourceKey(e.target.textContent)
    }

    return (
        <div className="crypto">
            <button className="btc" onClick={handleBTN}>BTC</button>
            <button className="ltc" onClick={handleBTN}>LTC</button>
            <button className="eth" onClick={handleBTN}>ETH</button>
        </div>
    )
}

export default SourceCurrency
