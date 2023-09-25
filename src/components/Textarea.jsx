import PropTypes from 'prop-types'

import '../styles/components/textarea.sass'

export function Textarea({ label, htmlFor, ...rest }) {
  return (
    <div className="textarea-wrapper">
      <textarea {...rest}></textarea>
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
}
