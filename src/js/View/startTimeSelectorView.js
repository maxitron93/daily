import { elements } from '../elements'
import { state } from '../state'
import { renderTimeDivs } from './renderTimeDivs'

const convertToString = (startTime) => {
    if (startTime < 10) {
        startTime = `0${startTime.toString()}` 
    } else {
        startTime = startTime.toString()
    }
    return startTime
}

const hideStartButton = () => {
    // Change opacity to 0
    elements.startTimeButton.style.opacity = 0
}

const showStartList = () => {
    // Get the current start time
    let currentStartTime = convertToString(state.times.start)

    // Change first list item to current state
    elements.startTimeList.querySelector('.hour').innerHTML = currentStartTime

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
    let startTime = convertToString(state.times.start)

    // Render the new start time
    elements.startTimeButton.querySelector('.hour').innerHTML = startTime
}

const renderNewTimeDivs = () => {
    renderTimeDivs(state.times)
}

export { hideStartButton, showStartList, hideStartList, showStartButton, getStartTime, renderStartTime, renderNewTimeDivs }