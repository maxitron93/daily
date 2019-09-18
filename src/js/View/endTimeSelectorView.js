import { elements } from '../elements'
import { state } from '../state'
import { renderTimeDivs } from './renderTimeDivs'
import { renderUpdatedItem } from './renderUpdatedItem'

const convertToString = (endTime) => {
    if (endTime < 10) {
        endTime = `0${endTime.toString()}` 
    } else {
        endTime = endTime.toString()
    }
    return endTime
}

const hideEndButton = () => {
    // Change opacity to 0
    elements.endTimeButton.style.opacity = 0
}

const showEndList = () => {
    // Get the current end time
    let currentEndTime = convertToString(state.times.end)

    // Change first list item to current state
    elements.endTimeList.querySelector('.hour').innerHTML = currentEndTime

    // Change display from none to block
    elements.endTimeList.style.display = 'block'
}

const hideEndList = () => {
    // Change display from block to none
    elements.endTimeList.style.display = 'none'
}

const showEndButton = () => {
    // Change opacity to 1
    elements.endTimeButton.style.opacity = 1
}

const getEndTime = (target) => {
    // Define empty variable
    let endTime = null

    // Get the end hour
    if(target.className.split(' ').includes('minutes')) {
        endTime = target.parentNode.querySelector('.hour').innerHTML
    } else if(target.className.split(' ').includes('list-item')) {
        endTime = target.querySelector('.hour').innerHTML
    } else if(target.className.split(' ').includes('hour')) {
        endTime = target.innerHTML
    }

    // Return the end hour
    return endTime
}

const renderEndTime = () => {
    // Get end time from state
    let endTime = convertToString(state.times.end)

    // Render the new end time
    elements.endTimeButton.querySelector('.hour').innerHTML = endTime
}

const renderNewTimeDivs = () => {
    renderTimeDivs(state.times)
}

const renderUpdatedItems = () => {
    // Render the updated position and dimention for each item
    state.items.forEach((item, array, index) => {
        renderUpdatedItem(item)
    })
}

export { 
    hideEndButton, 
    showEndList, 
    hideEndList, 
    showEndButton, 
    getEndTime, 
    renderEndTime, 
    renderNewTimeDivs, 
    renderUpdatedItems 
}
