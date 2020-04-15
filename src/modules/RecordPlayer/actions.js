import { SPIN, STOP, SCRATCH } from './actionTypes'

const COUNTERCLOCKWISE = 'COUNTERCLOCKWISE' 
const CLOCKWISE = 'CLOCKWISE' 
/**
 * action creator  to begin spinning the record
 * @param {string} direction - clockwise or not clockwise
 * @param {*} speed - decimal between 0 and 1
 */
export const spinRecord = (direction=CLOCKWISE,speed=0.5) => {
  return {
    type: SPIN,
    payload: {
      speed,
      direction,
    }
  }
}

export const stopRecord = () => {
  return {
    type: STOP,
  }
}

/**
 * 
 * @param {*} degrees - amount record is scratched in degrees
 */
export const scratchRecord = (degrees) => {
  return {
    type: SCRATCH,
    payload: {
      degrees
    }
  }
}