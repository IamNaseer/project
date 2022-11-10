import React from "react";
// import { Container } from "reactstrap";
import { BsFillPersonFill } from "react-icons/bs";

import { FaDelicious } from "react-icons/fa";

import "../Styles/header.css";


const Header = () => {
  

  return (
    // <ul>
    //   <li>
    //     <a href="#1">Home</a>
    //   </li>
    //   <li>
    //     <a href="#3">About</a>
    //   </li>
    // </ul>
    
       <nav class="navbar">
        
         <div class="logo"><FaDelicious />Upturn</div>
         <ul class="nav-links">
          
           <div class="menu">
             <li><a href="#1">Home</a></li>
             <li><a href="#2">About</a></li>
             <li>
               <a href="#3">Courses</a>
             </li>
             
             <li><a href="#4">Contact</a></li>
             <li><a href="#"><BsFillPersonFill /></a></li>
           </div>
         </ul>
       </nav>
  );
};

export default Header;
