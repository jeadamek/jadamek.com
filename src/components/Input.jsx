import PropTypes from 'prop-types'

import '../styles/components/input.sass'

export function Input({ label, htmlFor, ...rest }) {
  return (
    <div className="input-wrapper">
      <input autoComplete='off' {...rest} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
}
