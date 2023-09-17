import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {


  return (
    <div>
      <BrowserRouter >
        <Nav />
        <Routes>
          <Route 
          path='/'
          element={<Home />}
          />
          <Route
          path='about'
          element={<About />}
          />
          <Route
          path='skills'
          element={<Skills />}
          />
          <Route
          path='experience'
          element={<Experience />}
          />
          <Route
          path='contact'
          element={<Contact />}
          />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
