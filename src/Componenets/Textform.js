import { useState } from 'react';
import React from 'react';

export default function TextForm(props) {

    const changeHandler = (event) => {
        setText(event.target.value);
    }
    const clickUpHandler = (event) => {
        let temp = text.toUpperCase();
        setText(temp);
    }
    const clickLcHandler = () => {
        setText(text.toLowerCase())
    }
    const clearHandler = () => {
        setText("")
    }
    const removeExtraspaces =() => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container '>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="Textform" rows="8" value={text} onChange={changeHandler} placeholder="Enter your text here ..."></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={clickUpHandler}>Convert to uppercase</button>
                <button className='btn btn-primary mx-2' onClick={clickLcHandler}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={clearHandler}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={removeExtraspaces}>Remove Extra spaces</button>


            </div>
            <div className='container my-2'>
                <h2>Your text summary</h2>
                <p>{text.split(/[ ]+/).length} Words and  {text.lenth} characters</p>
                <h3>Preview</h3>
                {text}
            </div>
        </>
    );
}