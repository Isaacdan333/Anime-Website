import logo from './logo.svg';
import './App.css';
import Popular from './Components/Popular';
import {BrowserRouter} from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Popular />
      </div>
    </BrowserRouter>
  );
}

export default App;
