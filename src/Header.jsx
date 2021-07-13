import React from 'react';
import '../src/index.css';
import logo from './images/logo.jpg';
function Header() {
    return (
         <>
            <div className="header">
                {/* <h1>J KEEP</h1> */}
           
                <img alt="emage not found" src={logo} width="70px" height="50px"></img> 
                <h1>J keep</h1>
               
            </div>
         </>
    )
}

export default Header;
