import "./css/App.css";
import EwokNavbar from "./EwokNavbar.js";
import Homepage from "./Homepage";
import Header from "./Header";

function App() {
  return (
    <div className="main">
      <Header />
      <EwokNavbar />
      <Homepage />
    </div>
  );
}

export default App;
