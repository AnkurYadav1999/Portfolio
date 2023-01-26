import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
     <Header/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
