import { state } from '../state'
import { updateItemWidths, updateStartingPosition, updateEndTime } from '../Controller/adjustEndTimeController'
import { renderNewTimeDivs, renderEndTime, renderUpdatedItems, cannotAdjust } from '../View/adjustEndTimeView'

const adjustEndTime = (event) => {
        // Get the clicked button
        let target = event.target
        let newEndTime = null

        // Get the start time
        if (target.className.split(' ')[1] === 'btn-inc') {
            if (state.times.end < 24) {
                newEndTime = state.times.end + 1
            } else {
                cannotAdjust()
                return
            }
        } else {
            if (state.times.end > 13) {
                newEndTime = state.times.end - 1
            } else {
                cannotAdjust()
                return
            }
        }

        // Update items in state with new widths
        updateItemWidths(newEndTime)

        // Update items in state with new starting position
        updateStartingPosition(newEndTime)

        // Update end time state
        updateEndTime(newEndTime)

        // Render new time divs
        renderNewTimeDivs()

        // Render new end time
        renderEndTime()

        // Render items with new starting position and width
        renderUpdatedItems()
}

export { adjustEndTime }
