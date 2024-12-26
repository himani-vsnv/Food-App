import './App.css';
import Header from './Component/Header';
import Body from "./Component/Body"
import { Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/" element={<Body/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
