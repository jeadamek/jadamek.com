import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import '../styles/components/toggle.sass';

export function Toggle() {
  function handleThemeToggle() {
      document.body.classList.toggle('dark-theme')
      document.body.classList.toggle('light-theme')
  }

  return (
      <div className="toggle-wrapper" onClick={handleThemeToggle}>
         <div className="switch"></div>
         <div className="toggle">
            <FiMoon size={28}/>
            <FiSun size={28}/>
         </div>
      </div>
   )
}
