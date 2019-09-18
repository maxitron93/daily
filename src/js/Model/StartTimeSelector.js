import { hideStartButton, showStartList, hideStartList, showStartButton, getStartTime, renderStartTime, renderNewTimeDivs, renderUpdatedItems } from '../View/startTimeSelectorView'
import { updateStartTime, updateItemWidths, updateStartingPosition } from '../Controller/startTimeSelectorController'

const openStartTimeList = () => {
    // Hide button
    hideStartButton()

    // Show list
    showStartList()
}

const closeStartTimeList = (event) => {
    // Get the clicked button
    let target = event.target

    if(!target.className.split(' ').includes('start-btn-area')) {
        // Hide list
        hideStartList()

        // Show button
        showStartButton()
    } 
}

const selectStartTime = (event) => {
    // Get the clicked button
    let target = event.target
    let newStartTime = null

    // Get the start time
    newStartTime = getStartTime(target)

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

    // Hide list
    hideStartList()

    // Show start button
    showStartButton()
}

export { openStartTimeList, closeStartTimeList, selectStartTime }