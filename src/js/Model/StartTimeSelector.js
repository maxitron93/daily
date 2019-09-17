import { hideStartButton, showStartList, hideStartList, showStartButton } from '../View/startTimeSelectorView'

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

const selectStartTime = () => {
    if(target.className.split(' ').includes('start-list-area')) {
        console.log(target)
    }
    // Update start time state

    // Hude list

    // Show button with new start time from state
}

export { openStartTimeList, closeStartTimeList, selectStartTime }