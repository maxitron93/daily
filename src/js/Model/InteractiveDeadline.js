import interact from 'interactjs';

const InteractiveDeadline = () => {
    // Define the interactive deadline
    const deadline = interact('.deadline')

	// Define drag properties
    deadline.draggable({
		modifiers: [
		interact.modifiers.restrictRect({
			restriction: 'parent'
		})
		]
	})

	// Return deadline as a function
	return deadline
}

export { InteractiveDeadline }
