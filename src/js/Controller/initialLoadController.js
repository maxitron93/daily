import { state } from '../state';
import { elements } from '../elements'

const initialStateUpdate = (data) => {
    // Load in the items
    state.items = data.items

    // Load in the next id number
    let maxID = 1
    data.items.forEach((item, index, array) => {
        maxID = parseInt(item.id) > maxID ? parseInt(item.id) : maxID
    })
    state.nextId = maxID + 1

    // Load in the container width
    let containerWidth = elements.taskDeadlineContainer.offsetWidth
    state.containerWidth = containerWidth

    // Load in the start and end times
    state.times = data.times
}

export { initialStateUpdate }
