import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b1215";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode = {mode}/>}/><Route/>
            <Route exact path="/" element = {
              <TextForm
              heading="Enter your text below to analyze"
              mode={mode}
            />
            }> 
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
