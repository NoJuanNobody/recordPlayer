import React from 'react'
import PropTypes from 'prop-types'
import RecordPlayer from 'components/RecordPlayer'

function CoreLayout({ children }) {
  return (
    <div>
      <RecordPlayer />
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
