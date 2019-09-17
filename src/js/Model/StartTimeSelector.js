import { hideStartButton, showStartList, hideStartList, showStartButton, getStartTime, renderStartTime, renderNewTimeDivs } from '../View/startTimeSelectorView'
import { updateStartTime } from '../Controller/startTimeSelectorController'
import { state } from '../state'

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
    let startTime = null

    // Get the start time
    startTime = getStartTime(target)

    // Update start time state
    updateStartTime(startTime)

    // Render new start time
    renderStartTime()

    // Hide list
    hideStartList()

    // Show start button
    showStartButton()

    // Render new time divs
    renderNewTimeDivs()
}

export { openStartTimeList, closeStartTimeList, selectStartTime }