import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';
import Section5 from './component/section5';
import About from './component/about';


function App() {
  return (
    <div className="App">
           <Nav/>   
           <Section2/>
           <Section3/>
           <Section4/>
           <About/>
           <Section5/>

          
    </div>
  );
}

export default App;
