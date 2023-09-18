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
         <div id="social-medias">
            <BsGithub size={26} />
            <BsLinkedin size={26} />
         </div>
      </div>
   )
}