import PropTypes from "prop-types";

import "../styles/components/button.sass";

export function Button({title}) {
   return(
      <button className="submit-button">
         {title}
      </button>
   )
}

Button.propTypes = {
   title: PropTypes.string.isRequired
}