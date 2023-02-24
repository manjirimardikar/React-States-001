import React from 'react'
import './Maincontent.css';


const Maincontent = ({darkcolor}) => {
    const darkkk = {
       color:"rgb(197,73,114)"
  }
  const lighttt = {
       color:"rgb(248,125,177)"
  }
  return (
    <div className='Maincontent'>
     <h1 style={darkcolor ? lighttt : darkkk}>The WET Codbase</h1>
     <p>Sunday 4th,2020 11 min read</p>
     <p>Come waste your time with me</p>
     <h1 style={darkcolor ? lighttt : darkkk}>Goodby, Clean Code</h1>
     <p>Friday 22nd, 2019 5 min read</p>
     <p>Let clean codeguide you. Then let it go</p>
     <h1 style={darkcolor ? lighttt : darkkk}>My Decade In Review</h1>
     <p>Saturday 11th,2016 5 min read</p>
     <p>A personal reflection</p>
     <h1 style={darkcolor ? lighttt : darkkk}>What Are The React Team Principles</h1>
     <p>Thursday 4th 2015  5 min read</p>

    </div>
  )
}

export default Maincontent
