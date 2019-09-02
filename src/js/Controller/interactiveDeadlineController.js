import { InteractiveDeadline } from '../Model/InteractiveDeadline'
import { renderDeadlineDragMove } from '../View/interactiveDeadlineView'

const updateState = (target) => {
	console.log('Add code here to update state DEADLINE DRAG ONEND')
	console.log(`x-start: ${target.getAttribute('data-x')}`)
}

const initInteractiveDeadlines = () => {

    // Define the interactive deadline
    const interactiveDeadline = InteractiveDeadline()

    // Define the functionality of the interactive deadline
    interactiveDeadline.draggable({
        // Render the drag movement
		onmove: renderDeadlineDragMove(),
        
        // Update the state when drag event is finished
        onend: function (event) {
			updateState(event.target)
		}
    })
    
}

export { initInteractiveDeadlines }
