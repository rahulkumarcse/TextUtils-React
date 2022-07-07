import { useState } from 'react';
import React from 'react';

export default function TextForm(props) {

    const changeHandler = (event) => {
        setText(event.target.value);
    }
    const clickUpHandler = (event) => {
        let temp = text.toUpperCase();
        setText(temp);
        props.showAlert("Converted to uppercase", "success");
    }
    const clickLcHandler = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success")
    }
    const clearHandler = () => {
        setText("")
        props.showAlert("Text cleared", "success")
    }
    const removeExtraspaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extraspace has been removed", "success")
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("inputTextForm");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")

    }

    const wordCountHandler =() =>{
        let varcount =0 ;
        let splitArr = text.split(" ");
        for (let i =0;i< splitArr.length;i++){
          if(splitArr[i]!==''){ 
            varcount++;
          }
        
        }
       return varcount;
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container ' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="inputTextForm" rows="8" value={text} onChange={changeHandler} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} placeholder="Enter your text here ..."></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={clickUpHandler}>Convert to uppercase</button>
                <button className='btn btn-primary mx-2' onClick={clickLcHandler}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={clearHandler}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={removeExtraspaces}>Remove Extra spaces</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy to clipboard</button>


            </div>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{wordCountHandler()} Words and  {text.length} characters</p>
                <h3>Preview</h3>
                <p>{wordCountHandler() > 0 ? text : "Enter text above to preview "}</p>
            </div>
        </>
    );
}