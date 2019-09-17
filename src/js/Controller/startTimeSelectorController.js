import { state } from '../state'

const updateStartTime = (startTime) => {
    // Update the start time state
    state.times.start = parseInt(startTime)
}

export { updateStartTime }
