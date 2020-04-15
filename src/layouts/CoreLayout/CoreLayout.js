import React from 'react'
import PropTypes from 'prop-types'
import RecordPlayer from 'components/RecordPlayer'
import ControlPad from 'components/ControlPad';

function CoreLayout({ children }) {
  return (
    <div>
      <RecordPlayer />
      <ControlPad />
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
