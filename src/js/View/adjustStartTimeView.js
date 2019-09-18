import { elements } from '../elements'
import { state } from '../state'
import { renderTimeDivs } from './renderTimeDivs'
import { renderUpdatedItem } from './renderUpdatedItem'

const convertToString = (startTime) => {
    if (startTime < 10) {
        startTime = `0${startTime.toString()}` 
    } else {
        startTime = startTime.toString()
    }
    return startTime
}

const renderNewTimeDivs = () => {
    renderTimeDivs(state.times)
}

const renderStartTime = () => {
    // Get start time from state
    let startTime = convertToString(state.times.start)

    // Render the new start time
    elements.startTimeButton.querySelector('.hour').innerHTML = startTime
}

const renderUpdatedItems = () => {
    // Render the updated position and dimention for each item
    state.items.forEach((item, array, index) => {
        renderUpdatedItem(item)
    })
}

export {
    renderNewTimeDivs,
    renderStartTime,
    renderUpdatedItems
}
