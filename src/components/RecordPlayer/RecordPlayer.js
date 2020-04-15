import React from 'react'
import { useSelector } from 'react-redux'
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

function RecordPlayer({song, spinning=false}) {
  const { spinRecord, scratchRecord } = useRecordPlayer();
  const { direction, speed } = useSelector(({recordPlayer})=>{
    console.log(recordPlayer)
    return recordPlayer
  })
  const { item,   tray, root, record } = useStyles()
  console.log()
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(${4000*360}deg);
  }`
  const Rotate = styled.div`
  animation: ${rotate} 400s ease-in-out infinite;
  font-size: 1.2rem;
`;

  return (
    <div className={tray}>
      {direction === 'CLOCKWISE' && <div className={item} >
        <Rotate className={root}>
          <img className={record} onClick={(e)=> spinRecord('CLOCKWISE', .5)} src={Record} />
        </Rotate>
      </div>}
      
      {direction === null && <div className={item} >
        <div className={root}>
          <img className={record} onClick={(e)=> spinRecord('CLOCKWISE', .5)} src={Record} />
        </div>
      </div>}
      
    </div>
    
  )
}

RecordPlayer.propTypes = {
  song: string,
}

export default RecordPlayer
