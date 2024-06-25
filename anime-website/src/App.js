import logo from './logo.svg';
import './App.css';
import Popular from './Components/Popular';
import { GlobalContextUse } from './context/global';

function App() {
  const global = GlobalContextUse()
  console.log(global)
  return (
    <div className="App">
      <Popular />
    </div>
  );
}

export default App;
