import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Team from './components/Team';
import Testmonial from './components/Testmonial';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Service />
      <Menu />
      <Team />
      <Testmonial />
      <Contact />
      <Footer/> 
      {/* <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/service" element={<Service />}/>
            <Route exact path="/" element={<Menu />}/>
            <Route exact path="/team" element={<Team />}/>
            <Route exact path="/testmonial" element={<Testmonial />}/>
            <Route exact path="/contact" element={<Contact />}/>
        </Routes>
        <Footer/> 
      </Router> */}
    </>
  );
}

export default App;
