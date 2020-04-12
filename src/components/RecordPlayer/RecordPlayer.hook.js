import * as actions from 'modules/RecordPlayer/actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useMemo } from 'react'
/**
 * Custom hook for RecordPlayer component
 * @returns {object} RecordPlayer actions
 * 
 */
export default function useRecordPlayer() {
    const dispatch = useDispatch()
    return useMemo(()=>{
        return bindActionCreators(actions, dispatch)
    }, [dispatch])
}
