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
     {/* <div className='flex justify-end bg-red-50  pr-10   '> 
     <a href='#home' className='flex justify-center bg-primary h-10 w-10  hover:border-2 border-white    rounded-full  sticky top-0 bottom-0 '><p className='py-2'>Up!</p></a>
     </div> */}

     <About/>
     <Project/>
     <Resume/>
     <Contact/>
     <Fooder/>
    </div>
  );
}

export default App;
