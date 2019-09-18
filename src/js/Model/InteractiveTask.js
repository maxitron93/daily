import interact from 'interactjs';
import { renderTaskDragMove, renderResizeMove } from '../View/interactiveTaskView'
import { updateState } from '../Controller/interactiveTaskController'

const InteractiveTask = () => {
    // Define the interactive task
    const task = interact('.task')

    // Define drag properties
    task.draggable({
        // Render the drag movement
        onmove: renderTaskDragMove(), 
        modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
        ],
        // Update the state when drag event is finished
        onend: (event) => {
            updateState(event.target)
        }
    })

    // Define resize properties
    task.resizable({
        // enable snapping
        snap: {
            targets: [
                interact.createSnapGrid({ x: 1, y: 1 })
            ],
            range: Infinity,
            relativePoints: [ { x: 0, y: 0 } ]
        },
        // resize from all edges and corners
        edges: { 
            left: true, 
            right: true, 
            bottom: false, 
            top: false 
        },
    
        // keep the edges inside the parent
        restrictEdges: {
            outer: 'parent',
            // endOnly: true,
        },
    
        // minimum size
        restrictSize: {
            min: { 
                width: 5
            },
        },
        inertia: false,
        onend: (event) => {
            updateState(event.target)
        }
    })
    .on('resizemove', (event) => {
        // Render the resize movement
        renderResizeMove(event)
    })
}

export { InteractiveTask }
