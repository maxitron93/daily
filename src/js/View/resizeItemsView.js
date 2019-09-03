import { state } from '../state'

const renderUpdatedItems = () => {

    // Render the updated position and dimention for each item
    state.items.forEach((item, array, index) => {
        // Get the dragged position in the data-x/data-y attributes
  	    let x = item.xStart * state.containerWidth
        let y = 0

        // Get the item from the DOM
        let target = item.type === 'task' ? 
        document.getElementById(`${item.id}`).querySelector('.task') :
        document.getElementById(`${item.id}`).querySelector('.deadline')

        // Translate the element
	    target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // Update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)

        // Render the updated widths for each task
        if (item.type === 'task') {
            // Get the new width
            x = item.width * state.containerWidth

            // Update the task's width
            target.style.width = x + 'px'
        }
    })
}

export { renderUpdatedItems }

// {type: 'task', id: '1', xStart: 0, width: 0.2, color: 3},
// {type: 'deadline', id: '10', xStart: 0.18, color: 5},