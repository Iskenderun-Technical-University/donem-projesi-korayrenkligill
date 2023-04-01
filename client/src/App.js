import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import PcNavbar from './components/navbar/pc-navbar';
function App() {
  return (
    <div className="App">
      <PcNavbar logged={true} ticket={4}/>
    </div>
  );
}

export default App;
