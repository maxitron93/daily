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

const renderNewTimeDivs = () => {
    renderTimeDivs(state.times)
}

const renderEndTime = () => {
    // Get end time from state
    let endTime = convertToString(state.times.end)

    // Render the new end time
    elements.endTime.querySelector('.hour').innerHTML = endTime
}

const renderUpdatedItems = () => {
    // Render the updated position and dimention for each item
    state.items.forEach((item, array, index) => {
        renderUpdatedItem(item)
    })
}

const cannotAdjust = () => {
    elements.endTime.style.backgroundColor = '#FCB0B3'
    setTimeout(() => {
        elements.endTime.style.backgroundColor = '#B5CEED'
    }, 100)
}

export {
    renderNewTimeDivs,
    renderEndTime,
    renderUpdatedItems,
    cannotAdjust
}
