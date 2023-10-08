import { useState, useEffect } from 'react'

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

   const [activeLink, setActiveLink] = useState('')

   function handleMobileNavModal() {
      if (!isDesktop) {
         document
            .getElementById('nav-wrapper')
            .classList.toggle('active-mobile-nav')
      }
   }

   function handleScroll() {
      const scrollY = window.scrollY
      const sections = ['about-me', 'skills', 'work', 'contact']
      let found = false

      sections.forEach(section => {
         const element = document.getElementById(section)
         if (element) {
            // Calculate top position of the section and define where the element area starts
            const sectionTop = element.offsetTop + offset - 100

            // Calculate bottom position of the section, adding the section top position and its height
            const sectionBottom = sectionTop + element.offsetHeight

            if (
               scrollY >= sectionTop &&
               scrollY < sectionBottom &&
               activeLink !== section
            ) {
               setActiveLink(section)
               found = true
            }
         }
      })

      // If none section is visible, remove "active" class from all links
      if (!found) {
         setActiveLink('')
      }
   }

   // Add a Listener to scroll event when the component is built
   useEffect(() => {
      handleScroll()

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

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
                     <li className={activeLink === 'about-me' ? 'active' : ''}>
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
                     <li className={activeLink === 'skills' ? 'active' : ''}>
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
                     <li className={activeLink === 'work' ? 'active' : ''}>
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
                     <li className={activeLink === 'contact' ? 'active' : ''}>
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
