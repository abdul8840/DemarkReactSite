
import './App.css';
import About from './components/About/About';
import Contactus from './components/Contact/Contactus';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( <>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/services' Component={Services} />
          <Route exact path='/portfolio' Component={Portfolio} />
          <Route exact path='/contactus' Component={Contactus} />
      </Routes>
    </BrowserRouter>
    

  </>
)}

export default App;
