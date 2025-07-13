import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
