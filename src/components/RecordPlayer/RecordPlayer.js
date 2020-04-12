import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './RecordPlayer.styles'
import useRecordPlayer from './RecordPlayer.hook'
import Record from './static/record.png'
import { string } from 'prop-types'
import styled, { keyframes } from 'styled-components'
const useStyles = makeStyles(styles)
/**
 * renders the spinning record component
 * has album artwork in the middle
 */

function RecordPlayer({song}) {
  const { spinRecord, scratchRecord } = useRecordPlayer();
  const { item, tray, root, record } = useStyles()
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }`
  const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
  font-size: 1.2rem;
`;

  return (
    <div className={tray}>
      <div className={item} >
      <Rotate className={root}>
      <img className={record} onClick={(e)=> spinRecord('CLOCKWISE', .5)} src={Record} />
    </Rotate>
      </div>
    </div>
    
  )
}

RecordPlayer.propTypes = {
  song: string,
}

export default RecordPlayer
