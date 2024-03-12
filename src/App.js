// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Fooder from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Project from './component/Project';
import Resume from './component/Resume';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Project/>
     <Resume/>
     <Contact/>
     <Fooder/>
    </div>
  );
}

export default App;
