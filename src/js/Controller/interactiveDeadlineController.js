import { state } from '../state'

const updateState = (target) => {
    // Get the new position
    let nominalPosition = parseInt(target.getAttribute('data-x'))
    let newPosition = nominalPosition / state.containerWidth
    
    // Get the target id
    let id = target.parentNode.parentNode.id

    // Get the updated items
    let updatedItems = state.items.map((item, index, array) => {
        if (item.id === id) {
            return {
                type: item.type,
                description: item.description,
                id: item.id,
                xStart: newPosition,
                color: item.color
            }
        } else {
            return item
        }
    })

    // Update the state
    state.items = updatedItems

    console.log(state.items)
}

export { updateState }
