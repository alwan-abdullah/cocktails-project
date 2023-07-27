import { useEffect, useRef, useState } from "react";
import { FaCocktail } from "react-icons/fa";

export default function Header() {


  // useTimeout(() => setIdle(false), 1000 * 0);
  return (

  <header>
  <h1 className="logo" style={{color:"#fbc95a"}}>logo<FaCocktail /></h1>
  <nav>
    <ul>
      <li> <a href="">What We Do</a></li>
      <li> <a href="">Who We Are</a></li>
      <li> <a href="">Being Here</a></li>
      <li> <a href="">Careers</a></li>
    </ul>
  </nav>
  <label htmlFor="nav-toggle" className="nav-toggle-label">
    <span></span>
  </label>
</header>
 
 )
  
  }
 



