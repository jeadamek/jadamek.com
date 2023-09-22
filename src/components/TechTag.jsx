import PropTypes from "prop-types";

import "../styles/components/techTag.sass";

export function TechTag({title}) {
   return(
      <span className="tech-tag">
         {title}
      </span>
   )
}

TechTag.propTypes = {
   title: PropTypes.string.isRequired,
};