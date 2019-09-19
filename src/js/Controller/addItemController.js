import { state } from '../state'
import { updateStorage } from './updateStorage'

const updateState = (type) => {
    let nextId = state.nextId
    let newItem = {}

    if (type === 'task') {
        // Create the new task
        newItem = {type: 'task', description: '', id: nextId.toString(), xStart: 0, width: 0.2, color: 3}

        // Update state.nextId
        state.nextId += 1
    } else {
        // Create the new deadline
        newItem = {type: 'deadline', description: '', id: nextId.toString(), xStart: 0.2, color: 7}

        // Update state.nextId
        state.nextId += 1
    }

    // Update the state with the new item
    state.items.push(newItem)

    // Update local storage
    updateStorage()

    // Return the new item
    return newItem
}

export { updateState }

