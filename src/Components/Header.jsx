import React from 'react'
import './Header.css';



const Header = ({darkcolor, setDarkTheme}) => {
  const dark = {
    backgroundColor:"rgb(197,73,114)", color:"white"
}
const light = {
    backgroundColor:"rgb(248,125,177)", color:"black"
}

  return (
    <div className='Header'>
      <h1>Overreacted</h1>
      <button onClick={()=>{
        setDarkTheme(!darkcolor);
      }} style={darkcolor ? light : dark}>Toggle </button>
    </div>
  )
}

export default Header
