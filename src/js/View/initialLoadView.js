import { elements } from '../elements'
import { renderTask, renderDeadline } from './renderItem'
import { renderTimeDivs } from './renderTimeDivs'

const loadInTimeDivsFromState = (times) => {
    // Render time divs
    renderTimeDivs(times)
}

const loadInItemsFromState = (items) => {
    items.forEach((item, index, array) => {
        if (item.type === 'task') {
            renderTask(item)
        } else {
            renderDeadline(item)
        }
    })
}

const removeLoader = () => {
    elements.loader.style.display = 'none'
}

const renderContent = () => {
    elements.loadedContent.style.opacity = '1'
}

const loadInStartTime = (startTime) => {
    // Turn that start time into a string
    if (startTime < 10) {
        startTime = `0${startTime.toString()}` 
    } else {
        startTime = startTime.toString()
    }
    // Render the new start time
    elements.startTime.querySelector('.hour').innerHTML = startTime
}

const loadInEndTime = (endTime) => {
    // Turn that start time into a string
    if (endTime < 10) {
        endTime = `0${endTime.toString()}` 
    } else {
        endTime = endTime.toString()
    }
    // Render the new end time
    elements.endTime.querySelector('.hour').innerHTML = endTime
}

// {type: 'task', description: '', id: 1, xStart: 0, width: 0.1, color: 3}
export { 
    loadInTimeDivsFromState, 
    loadInItemsFromState, 
    removeLoader, 
    renderContent, 
    loadInStartTime, 
    loadInEndTime 
}
