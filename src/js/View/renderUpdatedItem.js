import { state } from '../state'

const renderUpdatedItem = (item) => {
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
}

export { renderUpdatedItem }
