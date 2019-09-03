import interact from 'interactjs';
import { renderDeadlineDragMove } from '../View/interactiveDeadlineView'
import { updateState } from '../Controller/interactiveDeadlineController'

const InteractiveDeadline = () => {
    // Define the interactive deadline
    const deadline = interact('.deadline')

	// Define drag properties
    deadline.draggable({
		onmove: renderDeadlineDragMove(),
		modifiers: [
		interact.modifiers.restrictRect({
			restriction: 'parent'
		})
		],
		onend: function (event) {
			updateState(event.target)
		}
	})
}

export { InteractiveDeadline }
