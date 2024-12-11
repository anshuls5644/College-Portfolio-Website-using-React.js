import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Img from '../../assets/logo-juit.png';



export default function navbar() {
  return (
    <nav class="navbar">
      <div class="navdiv">
        <div class="Logo"><a href="#"><img src={Img} alt="juit" ></img></a></div>
        
        <ul itemType="none">
          <li>
          
            <a href="#Landing"> HOME </a>
          </li>
          <li>
          
            <a href="#About">ABOUT JUIT</a>
          </li>
          <li>
            <Link to="/forms">
          <a href="#About">ADMISSIONS</a>
          </Link>
          </li>
          <li>
            <a href="#Placements">PLACEMENTS</a>
          </li>
          <li>
            <a href="#Contact-us">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
