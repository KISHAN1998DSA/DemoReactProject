import React, { useDebugValue, useEffect } from 'react'

const useCustom = (value) => {
    useDebugValue(value)
    useEffect(()=>{
        
        console.log(value)
        console.log('This is custom Hooks');
    },[value])
  return (
    <div></div>
  )
}

export default useCustom