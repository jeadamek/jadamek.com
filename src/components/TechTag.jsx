import PropTypes from "prop-types";

import "../styles/components/techTag.sass";

export function TechTag({title}) {
   return(
      <div>
         {title}
      </div>
   )
}

TechTag.propTypes = {
   title: PropTypes.string.isRequired,
};