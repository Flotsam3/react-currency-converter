import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './Components/Input';
import SourceCurrency from './Components/SourceCurrency';
import TargetCurrency from './Components/TargetCurrency';
import Display from './Components/Display';

function App() {
  const APP_KEY = "&api_key=85d837f2fd4349e1bbefa23d43a8af9a25d5df8889044eeeb7753177f0b34140"
  const API_URL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,GBP${APP_KEY}`
  const [stateDatapool, setstateDatapool] = useState(null)
  const [stateInput, setStateInput] = useState('0');
  const [stateCrypto, setStateCrypto] = useState('BTC');
  const [stateForex, setStateForex] = useState('USD');
  const [stateResult, setStateResult] = useState('Enter a value to convert!')

  const fetchData = async ()=>{
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  }

  useEffect(()=>{
    fetchData()
      .then((data) =>{
        setstateDatapool(data);
      });
    
    document.querySelector('.btc').focus();
  },[]);
  
  useEffect(()=>{
    if(stateDatapool!== null){
      handleConvertion()
    }
    console.log(stateDatapool)
   
  },[stateCrypto, stateForex, stateInput])

  const handleInput = (e)=>{
    setStateInput(e.target.value);
  }

  const handleCryptoSelection = (type)=> setStateCrypto(type);

  const handleForexSelection = (type)=>{
    setStateForex(type);
  }

  const handleConvertion = ()=>{ 
    setStateResult(stateDatapool[stateCrypto][stateForex] * stateInput);
    console.log(stateResult);
  }

  return (
    <div className="converter">
      <Input onInputChange={handleInput} />
      <div>
        <p>{`${stateCrypto} / ${stateForex}`}</p>
      </div>
      <SourceCurrency pressSourceKey={handleCryptoSelection} />
      <Display Display={stateResult} />
      <TargetCurrency pressTargetKey={handleForexSelection}/>
    </div>
  );
}

export default App;
