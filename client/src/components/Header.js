import React from "react";
import Navbar from "./Navbar";

function Header() {


  return (
    <header>
      <div className="header-logo-container">
        <img 
        src="/images/phoenix-logo.png" 
        alt="Phoenix Logo"
        className="header-logo"
        />
      </div>

      <Navbar />
    </header>
  
  );
}

export default Header;