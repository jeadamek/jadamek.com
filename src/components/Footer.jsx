import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "../styles/components/footer.sass";

export function Footer(){
   return (
      <footer>
         <div className="author-info">
            Designed and Developed by 
            <span>Jessica Adamek 2023</span>
         </div>

         <div className="social-media">
            <a href="https://github.com/jeadamek" target="_blank" rel="noreferrer"><BsGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/jessica-adamek/" target="_blank" rel="noreferrer"><BsLinkedin size={28} /></a>
         </div>
      </footer>
   )
}