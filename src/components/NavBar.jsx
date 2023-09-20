import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "../styles/components/navBar.sass";

import Logo from "../assets/logo.svg";

export function NavBar() {
   return(
      <div className="nav-bar">
         <img id="logo" src={Logo} alt="Jessica's Logo" />
         <nav>
            <ul>
               <li>about me</li>   
               <li>skills</li>   
               <li>work</li>   
               <li>contact</li>   
            </ul>

         </nav>
         <div id="social-media">
            <a href="https://github.com/jeadamek" target="_blank" rel="noreferrer"><BsGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/jessica-adamek/" target="_blank" rel="noreferrer"><BsLinkedin size={28} /></a>
         </div>
      </div>
   )
}