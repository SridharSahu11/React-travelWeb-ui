import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />   
          <Route path='/about' element={<About/>} />  
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
