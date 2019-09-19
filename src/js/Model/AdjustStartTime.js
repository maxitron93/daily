import { state } from '../state'
import { updateItemWidths, updateStartingPosition, updateStartTime } from '../Controller/adjustStartTimeController'
import { renderNewTimeDivs, renderStartTime, renderUpdatedItems, cannotAdjust } from '../View/adjustStartTimeView.js'

const adjustStartTime = (event) => {
    // Get the clicked button
    let target = event.target
    let newStartTime = null

    // Get the start time
    if (target.className.split(' ')[1] === 'btn-inc') {
        if (state.times.start < 12) {
            newStartTime = state.times.start + 1
        } else {
            cannotAdjust()
            return
        }
    } else {
        if (state.times.start > 0) {
            newStartTime = state.times.start - 1
        } else {
            cannotAdjust()
            return
        }
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

    console.log(state.times)
}

export { adjustStartTime }
