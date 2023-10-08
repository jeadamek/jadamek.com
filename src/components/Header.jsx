// import { useState } from 'react';

import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { RiMenu5Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

import { Toggle } from './Toggle'

import '../styles/components/header.sass'

import Logo from '../assets/logo.svg'

export function Header() {
   const desktopOffset = -130
   const mobileOffset = -250

   const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })
   const offset = isDesktop ? desktopOffset : mobileOffset

   function handleMobileNavModal() {
      document
         .getElementById('nav-wrapper')
         .classList.toggle('active-mobile-nav')
   }

   return (
      <div className="sidebar">
         <header>
            <button className="menu-btn" onClick={() => handleMobileNavModal()}>
               <RiMenu5Fill size={28} />
            </button>
            <img id="logo" src={Logo} alt="Jessica's Logo" />
            <div id="nav-wrapper">
               <div className="buttons">
                  <button onClick={() => handleMobileNavModal()}>
                     <AiOutlineClose size={28} />
                  </button>

                  <Toggle />
               </div>
               <nav>
                  <ul>
                     <li className="active">
                        <Link
                           to="about-me"
                           spy={true}
                           smooth={true}
                           offset={offset}
                           duration={500}
                           onClick={() => handleMobileNavModal()}
                        >
                           about me
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="skills"
                           spy={true}
                           smooth={true}
                           offset={offset}
                           duration={500}
                           onClick={() => handleMobileNavModal()}
                        >
                           skills
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="work"
                           spy={true}
                           smooth={true}
                           offset={offset}
                           duration={500}
                           onClick={() => handleMobileNavModal()}
                        >
                           work
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="contact"
                           spy={true}
                           smooth={true}
                           offset={offset}
                           duration={500}
                           onClick={() => handleMobileNavModal()}
                        >
                           contact
                        </Link>
                     </li>
                  </ul>
               </nav>
               <div className="social-media">
                  <a
                     href="https://github.com/jeadamek"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <BsGithub size={28} />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/jessica-adamek/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <BsLinkedin size={28} />
                  </a>
               </div>
            </div>
         </header>
      </div>
   )
}
