import logo from './logo.svg';
import './App.css';
import Aboutme from './Aboutme';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Still In Development !!! <br/>
        About me ? 
        <a href='./Aboutme' onClick={<Aboutme/>}>Test Link</a>
        
      </header> 
      <Aboutme/>
    </div>
    
  );
}

export default App;
