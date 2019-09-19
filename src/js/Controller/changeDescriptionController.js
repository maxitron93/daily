import { state } from '../state'

const updateState = (newDescription, id) => {
    // Create updated state
    let updatedState = state.items.map((item, index, array) => {
        if (item.id === id) {
            item.description = newDescription
        }
        return item
    })

    // Update the state
    state.items = updatedState
}

export {
    updateState
}