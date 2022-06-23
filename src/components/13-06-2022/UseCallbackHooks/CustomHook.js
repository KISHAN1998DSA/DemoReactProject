import React, { useRef, useState } from 'react'
import useCustom from './useCustom'

const CustomHook = () => {
    const inputRef=useRef()
    const [name,setName]=useState('')
    useCustom(name)
  return (
    <div>
        <input type={'text'} ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default CustomHook