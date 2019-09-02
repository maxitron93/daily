import interact from 'interactjs';
import { DragMoveListener } from './DragMoveListener'

const updateState = (target) => {
	console.log('Add code here to update state')
	console.log(`x-start: ${target.getAttribute('data-x')}`)
	console.log(`width: ${target.offsetWidth}`)
	console.log(document.querySelector('.task-deadline-container').offsetWidth)
}

const InteractiveTask = () => {
    // Define the interactive task
    const task = interact('.task')
    
    // Define draggable functionality
    task.draggable({
        onmove: DragMoveListener,
        modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
        ],
        onend: (event) => {
            updateState(event.target)
        }
    })

    // Define resizing functionality
    task.resizable({
        // enable snapping
        snap: {
            targets: [
                interact.createSnapGrid({ x: 2, y: 2 })
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
                width: 20
            },
        },
        inertia: false,
        onend: (event) => {
            updateState(event.target)
        }
    })

    return task
}

export { InteractiveTask }

