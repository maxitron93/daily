import { state } from '../state'

const updateState = (target) => {
    // Get the new position
    let nominalPosition = parseInt(target.getAttribute('data-x'))
    let newPosition = Math.floor(nominalPosition / state.containerWidth * 1000) / 1000
    
    // Get the target id
    let id = target.parentNode.parentNode.id

    // Get the updated items
    let updatedItems = state.items.map((item, index, array) => {
        if (item.id === id) {
            return {
                type: item.type,
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

    console.log('State updated with new deadline position')
    console.log(state.items)
}

export { updateState }
