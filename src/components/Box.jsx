import React, { useState } from 'react'
import './Todo.css'

export default function Box() {
    const [word,setWord]= useState("");
    const [letter,setLetter]= useState("");
    const [paragraph,setParagraph]= useState("");
    const [text,setText] = useState("");
    const changeValue = (e)=> {
      setText(e.target.value)     
  }
    const changeUpper=()=>{
        setText(text.toUpperCase())
    }
    const changeLower=()=>{
        setText(text.toLowerCase())
    }
  console.log(text);
   

  return (
    <>
    
    <div className='container'>

        <h1> <i class="fa-solid fa-pen-nib fa-2xs"></i> Word Counter</h1>
        <div className='form'>
            <div className="word">
                <p><i class="fa-solid fa-file-word fa-sm"></i> Word</p>
                <p>{text ? text.trim().split(/\s+/).length:0}</p>
            </div>
            <div className="letter">
                <p><i class="fa-solid fa-pen fa-sm"></i> Letter</p>
                <p>{text.trim().length}</p>
            </div>
            <div className="paragraph">
                <p><i class="fa-solid fa-book fa-sm"></i> Paragraph</p>
                <p>{text.trim().split(/\n+/).filter((e)=> e !== "").length}</p>
            </div>
        </div>
        <textarea placeholder='Write some text here...' value={text} onChange={changeValue} name="" id="input" cols="30" rows="10"> 
        </textarea> <br />
        <div className="btn">
            <button onClick={changeUpper}>ToUpperCase</button>
            <button onClick={changeLower}>ToLowerCase</button>
        </div>
        
    </div>
    </>
  )
}
