import { InteractiveTask } from '../Model/InteractiveTask'
import { renderTaskDragMove, renderResizeMove } from '../View/interactiveTaskView'

const updateState = (target) => {
	console.log('Add code here to update state')
	console.log(`x-start: ${target.getAttribute('data-x')}`)
	console.log(`width: ${target.offsetWidth}`)
	console.log(document.querySelector('.task-deadline-container').offsetWidth)
}

const initInteractiveTasks = () => {   

    const interactiveTask = InteractiveTask()

    // Define functionality on drag
    interactiveTask.draggable({
        // Render the drag movement
        onmove: renderTaskDragMove(),

        // Update the state when drag event is finished
        onend: (event) => {
            updateState(event.target)
        }
    })

    // Define functionality on resize
    interactiveTask.on('resizemove', (event) => {
        // Render the resize movement
        renderResizeMove(event)
    })

    // Update state when resize event is finished
    interactiveTask.resizable({
        onend: (event) => {
            updateState(event.target)
        }
    })


}

export { initInteractiveTasks }
