import React,{useEffect, useState} from 'react'

const UseEffectHook1 = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        if(count>0){
            document.title=`Chats (${count})`            
        }else{
            document.title=`Chats`
        }
        console.log('UseEffect');
    },[count])
    console.log('Outside UseEffect');
  return (
    <div>
        <h1>UseEffectHook</h1>
            <h1>{count}</h1>
        <button className='button' onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffectHook1