import { elements } from '../elements'
import { state } from '../state'
import { renderTimeDivs } from './renderTimeDivs'

const hideStartButton = () => {
    // Change opacity to 0
    elements.startTimeButton.style.opacity = 0
}

const showStartList = () => {
    // Change display from none to block
    elements.startTimeList.style.display = 'block'
}

const hideStartList = () => {
    // Change display from block to none
    elements.startTimeList.style.display = 'none'
}

const showStartButton = () => {
    // Change opacity to 1
    elements.startTimeButton.style.opacity = 1
}

const getStartTime = (target) => {
    // Define empty variable
    let startTime = null

    // Get the start hour
    if(target.className.split(' ').includes('minutes')) {
        startTime = target.parentNode.querySelector('.hour').innerHTML
    } else if(target.className.split(' ').includes('list-item')) {
        startTime = target.querySelector('.hour').innerHTML
    } else if(target.className.split(' ').includes('hour')) {
        startTime = target.innerHTML
    }

    // Return the start hour
    return startTime
}

const renderStartTime = () => {
    // Get start time from state
    let startTime = state.times.start

    // Turn that start time into a string
    if (startTime < 10) {
        startTime = `0${startTime.toString()}` 
    } else {
        startTime = startTime.toString()
    }

    // Render the new start time
    elements.startTimeButton.querySelector('.hour').innerHTML = startTime
}

const renderNewTimeDivs = () => {
    renderTimeDivs(state.times)
}

export { hideStartButton, showStartList, hideStartList, showStartButton, getStartTime, renderStartTime, renderNewTimeDivs }