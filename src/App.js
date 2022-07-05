import { useState } from 'react';
import './App.css';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
import Alert from './Componenets/Alert';

function App() {
  const [mode, setMode] = useState('light'); //  To check dark mode
  const [alert, setAlert]= useState(null);

  const showAlert=(message , type) =>{
setAlert({  msg : message,
  type: type}
)
setTimeout(
  ()=>{
    setAlert(null) ;
  }, 1500
)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode disabled","success")
    }
  }
  return (
    <>
      <Navbar title="DevRahul" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container  my-3' >
        <Textform heading='Enter text to analyze' showAlert = {showAlert} mode={mode} />
      </div>

    </>
  );
}

export default App;
