import React from 'react'
import PropTypes from 'prop-types'

export default function Error({mensaje}) {
     return (
          <div>
               <p className="red darken-4 error">{mensaje}</p>
          </div>
     )
}

Error.propTypes = {
     mensaje: PropTypes.string.isRequired
}