import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "../styles/components/footer.sass";

export function Footer(){
   return (
      <footer>
         <div className="author-info">
            Designed and Developed by 
            <div>Jessica Adamek 2023</div>
         </div>

         <div className="social-media">
            <a href="https://github.com/jeadamek" target="_blank" rel="noreferrer"><BsGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/jessica-adamek/" target="_blank" rel="noreferrer"><BsLinkedin size={24} /></a>
         </div>
      </footer>
   )
}