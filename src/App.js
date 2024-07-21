import './App.css';
import './responsive.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
