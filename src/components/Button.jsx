import PropTypes from 'prop-types'

import '../styles/components/button.sass'

export function Button({ title, ...rest }) {
   return (
      <button className="submit-button" {...rest}>
         {title}
      </button>
   )
}

Button.propTypes = {
   title: PropTypes.string.isRequired
}
