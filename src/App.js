import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Review from './review';
import Service from './component/service';
import About from './component/about';
import Aboutus from './component/aboutus';

import DarkVariantExample from './component/testmonial';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';

function App() {
  return (
    <div className="App justify-center items-center bg-gray-800">
      <Router>
      <Nav />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/review" element={<Review />} />
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
