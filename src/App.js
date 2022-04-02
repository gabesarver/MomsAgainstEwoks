import logo from './fuckewok.svg';
import './App.css';
import EwokNavbar from './EwokNavbar.js'

function App() {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App">
        WELCOME TO HELL
      </div>
      <EwokNavbar />

      <div>
        Main Page
      </div>

    </div>
  );
}

export default App;
