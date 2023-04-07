import React, {useState} from 'react';
import logo from '../assets/2503508.png';
import './Navbar.css'

const Navbar = (props) => {
    const [inputData, setInputData] = useState("");
  return (
    <section className='navbarContainer'>
        <div className="navbarLogoTitle">
        <img src={logo} alt="Navbar Logo" className="imageLogo"/>
        <h1 className="navbarTitle">TVK Movie DB</h1>
        </div>    
    <div className="searchbar">
        <input onChange={(e) =>{
            setInputData(e.target.value)    
        }} type="text"
          placeholder="Enter movie name here..."
          id="movie-name"
          value={inputData} />
        <button onClick={() => {
            props.inputDataFunc(inputData);
        }}>Search</button>
        
    </div>
    </section>
  )
}

export default Navbar;