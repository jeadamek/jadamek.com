import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { Toggle } from "./toggle";

import "../styles/components/header.sass";

import Logo from "../assets/logo.svg";

export function Header() {

   function handleModal() {
      document.getElementById("nav-wrapper").classList.toggle('active-mobile-nav');
   }

   return(
      <div className="sidebar">
         <header>
            <button className="menu-btn"
               onClick={() => {
                  handleModal()
               }}>
               <RiMenu5Fill size={28} />
            </button>
            <img id="logo" src={Logo} alt="Jessica's Logo" />
            <div id="nav-wrapper">
               <div className="buttons">
                  <button onClick={() => {
                     handleModal()
                  }}>
                     <AiOutlineClose size={28}/>
                  </button>
                  <Toggle />
               </div>
               <nav>
                  <ul>
                     <li><a href="#">about me</a></li>
                     <li className="active-menu"><a href="#">skills</a></li>
                     <li><a href="#">work</a></li>
                     <li><a href="#">contact</a></li>
                  </ul>
               </nav>
               <div className="social-media">
                  <a href="https://github.com/jeadamek" target="_blank" rel="noreferrer"><BsGithub size={28} /></a>
                  <a href="https://www.linkedin.com/in/jessica-adamek/" target="_blank" rel="noreferrer"><BsLinkedin size={28} /></a>
               </div>
            </div>
         </header>
      </div>
   )
}