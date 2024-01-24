import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Capabilities } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <div data-testid="app-component">
      <NavBar />
      <Banner />
      <Capabilities />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
