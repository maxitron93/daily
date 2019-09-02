import interact from 'interactjs';

const InteractiveTask = () => {
    // Define the interactive task
    const task = interact('.task')

    // Define drag properties
    task.draggable({
        modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent'
        })
        ]
    })

    // Define resize properties
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
        inertia: false
    })

    // Return task as a function
    return task
}

export { InteractiveTask }
