import { state } from '../state';

const initialStateUpdate = (items) => {
    // Load in the items
    state.items = items

    // Load in the next id number
    let maxID = 1
    items.forEach((item, index, array) => {
        maxID = parseInt(item.id) > maxID ? parseInt(item.id) : maxID
    })
    state.nextId = maxID + 1
}

export { initialStateUpdate }
