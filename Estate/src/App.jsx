import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonial></Testimonial>
    </div>
  );
}

export default App;
