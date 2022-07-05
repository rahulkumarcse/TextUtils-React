import { useState } from 'react';
import './App.css';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
function App() {
  const [mode,setMode] = useState('light'); //  To check dark mode
 
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
      <Navbar title="DevRahul" mode = {mode} toggleMode={toggleMode}/>
      <div className='container  my-3' >
        <Textform heading='Enter text to analyze' mode = {mode}  />
      </div>

    </>
  );
}

export default App;
