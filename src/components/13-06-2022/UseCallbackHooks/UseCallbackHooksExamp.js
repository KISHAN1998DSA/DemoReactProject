import React, { useCallback, useState } from 'react'
import ChildData from './ChildData';

const UseCallbackHooksExamp = () => {
    const [countone,setCountone]=useState(0);
    const [counttwo,setCounttwo]=useState(0);

    //useCallback mamorised function
    //useMemo mamoriese the Variable data   
    const getData= useCallback(()=>{
        console.log([counttwo+1,counttwo-1])
        return [counttwo+1,counttwo-1];
    },[counttwo])
  
  return (
    <div>
        <button onClick={()=>setCountone(countone + 1 )}>Number One {countone} </button>
        <button onClick={()=>setCounttwo(counttwo + 1 )}>Number Two {counttwo}</button>
        <ChildData getData={getData}/>
    </div>
  )
}

export default UseCallbackHooksExamp