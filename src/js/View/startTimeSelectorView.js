import { elements } from '../elements'

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

export { hideStartButton, showStartList, hideStartList, showStartButton }