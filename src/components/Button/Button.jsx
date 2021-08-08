import React from 'react'
import { LoadMore } from './Button.style'
import PropTypes from 'prop-types'

function Button({ onClick, children }) {
  return (
    <LoadMore type="submit" onClick={onClick}>
      {children}
    </LoadMore>
  )
}

export default Button

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
