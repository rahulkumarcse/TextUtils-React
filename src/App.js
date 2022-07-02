import './App.css';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
function App() {
 
  return (
    <>
      <Navbar title="DevRahul" />
      <div className='container  my-3' >
        <Textform heading='Enter text to analyze'  />
      </div>

    </>
  );
}

export default App;
