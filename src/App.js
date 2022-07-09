import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Team from './components/Team';
import Testmonial from './components/Testmonial';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Menu />
      <Team />
      <Testmonial />
      <Contact />
    </>
  );
}

export default App;
