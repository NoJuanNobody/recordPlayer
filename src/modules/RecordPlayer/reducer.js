import { STOP, SPIN, SCRATCH } from './actionTypes'

const handleSpinRecord = (state, payload) =>{
  const { direction, speed } = payload
  return {
    ...state,
    direction,  
    speed,
  }
}

const handleScratchRecord = (state, payload) =>{
  const { degrees } = payload
  return {
    ...state,
    degrees,
  }
}

const initialState = {
  direction:null,
  speed: 1.45,
  degrees: null,
}

export default function recordPlayer(state=initialState, action) {
  const { type, payload } = action
  console.log(payload);
  switch (type) {
    case SPIN:
      return handleSpinRecord(state, payload)
      break;
    case STOP:
      return initialState
      break;
    case SCRATCH:
      return handleScratchRecord(state,payload)
      break;
    default:
      return state
  }
}

