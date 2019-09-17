import { state } from '../state'

const updateEndTime = (endTime) => {
    // Update the end time state
    state.times.end = parseInt(endTime)
}

export { updateEndTime }
