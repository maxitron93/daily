import { state } from '../state'
import { updateStorage } from './updateStorage';


const updateState = (target) => {
	// Get the updated position
	let nominalPosition = parseInt(target.getAttribute('data-x'))
    let newPosition = nominalPosition / state.containerWidth

	// Get the updated width
	let nominalWidth = parseInt(target.offsetWidth)
	let newWidth = nominalWidth / state.containerWidth

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
				width: newWidth,
				color: item.color
            }
        } else {
            return item
        }
	})
	
	// Update the state
    state.items = updatedItems

    // Update local storage
    updateStorage()
}

export { updateState }
