import { state } from '../state'
import { updateItemWidths, updateStartingPosition, updateStartTime } from '../Controller/adjustStartTimeController'
import { renderNewTimeDivs, renderStartTime, renderUpdatedItems } from '../View/adjustStartTimeView.js'

const adjustStartTime = (event) => {
    // Get the clicked button
    let target = event.target
    let newStartTime = null

    // Get the start time
    if (target.className.split(' ')[1] === 'btn-inc') {
        newStartTime = state.times.start + 1    
    } else {
        newStartTime = state.times.start - 1
    }
    
    // Update items in state with new widths
    updateItemWidths(newStartTime)

    // Update items in state with new starting position
    updateStartingPosition(newStartTime)

    // Update start time state
    updateStartTime(newStartTime)

    // Render new time divs
    renderNewTimeDivs()

    // Render new start time
    renderStartTime()

    // Render items with new starting position and width
    renderUpdatedItems()
}

export { adjustStartTime }
