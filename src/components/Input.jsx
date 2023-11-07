import React from 'react'

export default function Input() {
  return (
    <>
    <div className='input'>
        <textarea value={text} onChange={(e)=>changeValue(e.target.value)} name="" id="" cols="30" rows="10">
            {/* <input 
            type="textarea"
            onChange={()=>changValue} 
            /> */}
        </textarea>
    </div>
    



    </>
  )
}
