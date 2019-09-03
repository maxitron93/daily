import { state } from '../state';
import { elements } from '../elements'

const initialStateUpdate = (items) => {
    // Load in the items
    state.items = items

    // Load in the next id number
    let maxID = 1
    items.forEach((item, index, array) => {
        maxID = parseInt(item.id) > maxID ? parseInt(item.id) : maxID
    })
    state.nextId = maxID + 1

    // Load in the container width
    let containerWidth = elements.taskDeadlineContainer.offsetWidth
    state.containerWidth = containerWidth
}

export { initialStateUpdate }
