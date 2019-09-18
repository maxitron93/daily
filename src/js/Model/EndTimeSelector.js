import { hideEndButton, showEndList, hideEndList, showEndButton, getEndTime, renderEndTime, renderNewTimeDivs, renderUpdatedItems } from '../View/endTimeSelectorView'
import { updateEndTime, updateItemWidths, updateStartingPosition } from '../Controller/endTimeSelectorController'

const openEndTimeList = () => {
    // Hide button
    hideEndButton()

    // Show list
    showEndList()
}

const closeEndTimeList = (event) => {
    // Get the clicked button
    let target = event.target

    if(!target.className.split(' ').includes('end-btn-area')) {
        // Hide list
        hideEndList()

        // Show button
        showEndButton()
    } 
}

const selectEndTime = (event) => {
    // Get the clicked button
    let target = event.target
    let newEndTime = null

    // Get the end time
    newEndTime = getEndTime(target)

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

    // Hide list
    hideEndList()

    // Show end button
    showEndButton()
}

export { openEndTimeList, closeEndTimeList, selectEndTime }
