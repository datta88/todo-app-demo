import React, { useState } from 'react'
import './Test.css'
function Test(props) {

    const [input, setInput] = useState('')
    return (
        <>
            <div className='input-brand-con'>
                <input type='text' value={input} placeholder='enter the name' onChange={e => { setInput(e.target.value) }} className='input-contener' />
                <button type='button' className='btn-add' onClick={() => {
                    props.addList(input)
                    setInput(" ");
                }}><img src='./image/add.png' className='img-add-btn' /></button>
            </div>
        </>
    )
}

export default Test 
