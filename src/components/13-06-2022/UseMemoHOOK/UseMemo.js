import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [sum,setSum]=useState({
        number1:0,
        number2:0,
        sumValue:0
    })
    //const [sub,setSub]=useState(0)
    const getInputValue1=(event)=>{
        sum.number1=event.target.value;
        console.log(sum.number1+'number1');
    }
    const getInputValue2=(event)=>{
        
        sum.number2=event.target.value;
        console.log(sum.number2,'number2');
    }
    const sumTwoNumber=()=>{
        setSum(sum.sumValue=Number(sum.number1)+Number(sum.number2))
        console.log(sum.sumValue);
    }
    const checkTopic=useMemo(()=>{
        
    })

  return (
    <div>
        <h1>{checkTopic?'SUM':'SUB'}</h1>
        <input type={'text'} onChange={getInputValue1}/>
        <input type={'text'} onChange={getInputValue2}/>
        <button onClick={()=>sumTwoNumber()}> Sum</button>
        <br/>
        <h1>{sum.sumValue}</h1>
    </div>
  )
}

export default UseMemo