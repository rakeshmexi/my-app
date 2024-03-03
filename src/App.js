
import {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";

function App() {
  
  const [mode,setMode] = useState("light");

  let toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743";
    }else{
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  }

  return (
<>
<Navbar title="Navbar" about="About " mode={mode} toggleMode={toggleMode} />
<div className='container my-3'>
  <Textform heading="enter your text" mode={mode} toggleMode={toggleMode} />
</div>
</>
  );
}

export default App;
