import React from 'react'

let ExportFun=() =>{
    return (
    <div>
        Hello
        <joinUs/>
        <joinYou/>
    </div>
  )

}
function joinUs(){
    return <h2>joinUs</h2>
} 
// let joinUs=()=>{<h2>joinUs</h2>}
export default ExportFun
export {joinUs}