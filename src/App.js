import logo from './fuckewok.svg';
import './App.css';
import EwokNavbar from './EwokNavbar.js'

function App() {
  return (
    
    <div className="main">
      <EwokNavbar />
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App">
        
      </div>
      

      <div>
        Main Page
      </div>

    </div>
  );
}

export default App;
