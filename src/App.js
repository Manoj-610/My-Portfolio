import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu1/Menu";
import Aboutme from "./components/portfolio/Aboutme";
import Skills from "./components/testimonials/Skills";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";



function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="App">
    <Topbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Aboutme/>
      <Works/>
      <Skills/>
      <Qualification/>
      <Services/>
      <Contact/>
    </div>

    </div>
  );
}

export default App;
