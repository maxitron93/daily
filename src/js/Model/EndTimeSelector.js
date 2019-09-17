import { hideEndButton, showEndList, hideEndList, showEndButton, getEndTime, renderEndTime, renderNewTimeDivs } from '../View/endTimeSelectorView'
import { updateEndTime } from '../Controller/endTimeSelectorController'

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
    let endTime = null

    // Get the end time
    endTime = getEndTime(target)

    // Update end time state
    updateEndTime(endTime)

    // Render new end time
    renderEndTime()

    // Hide list
    hideEndList()

    // Show end button
    showEndButton()

    // Render new time divs
    renderNewTimeDivs()
}

export { openEndTimeList, closeEndTimeList, selectEndTime }
