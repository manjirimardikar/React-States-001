
import './App.css';
import Header from './Components/Header';
import Maincontent from './Components/Maincontent';
import { useState } from 'react';

function App() {
  const dark = {
    backgroundColor:"rgb(40,44,53)", color:"white"
}
const light = {
    backgroundColor:"white", color:"black"
}
  const [darktheme, setDarktheme] = useState(false);
  return (


    <div className="App" style={darktheme ?  dark : light}>
     
      <Header  darkcolor={darktheme}  setDarkTheme={setDarktheme} />
      <Maincontent  darkcolor ={darktheme}/>
    </div>
  );
}

export default App;
