import logo from './logo.svg';
import './App.css';
import Map from "./components/map.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Map-box">
        <Map />
      </div>
    </div>
  );
}

export default App;
