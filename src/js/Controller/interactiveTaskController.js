import { state } from '../state'

const updateState = (target) => {
	// Get the updated position
	let nominalPosition = parseInt(target.getAttribute('data-x'))
    let newPosition = Math.floor(nominalPosition / state.containerWidth * 1000) / 1000

	// Get the updated width
	let nominalWidth = parseInt(target.offsetWidth)
	let newWidth = Math.floor(nominalWidth / state.containerWidth * 1000) / 1000

	// Get the target id
	let id = target.parentNode.parentNode.id

	// Get the updated items
    let updatedItems = state.items.map((item, index, array) => {
        if (item.id === id) {
            return {
                type: item.type,
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

    console.log('State updated with new task position and width')
    console.log(state.items)
}

export { updateState }
