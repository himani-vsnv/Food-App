import './App.css';
import Header from './Component/Header';
import Body from "./Component/Body"
import { Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import RestMenu from './Component/RestMenu';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/restMenu/:restId" element={<RestMenu/>}/>
    </Routes>
    </div>
  );
}

export default App;
