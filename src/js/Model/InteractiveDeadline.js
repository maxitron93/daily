import interact from 'interactjs';
import { DragMoveListener } from './DragMoveListener'

const updateState = (target) => {
	console.log('Add code here to update state DEADLINE DRAG ONEND')
	console.log(`x-start: ${target.getAttribute('data-x')}`)
}

const InteractiveDeadline = () => {
    // Define the interactive deadline
    const deadline = interact('.deadline')

    deadline.draggable({
		onmove: DragMoveListener,
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
