import { state } from '../state'

// Check for the number of items in the state
const checkNumItems = () => {
    return (state.items.length > 1)
}

// Update the state after removal
const updateState = (id) => {
    state.items = state.items.filter((item, index, array) => {
        return item.id !== id
    })
}

export { checkNumItems, updateState }
