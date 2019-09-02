import { renderDragMove } from './renderDragMove'

const renderTaskDragMove = () => {
    return renderDragMove
}

const renderResizeMove = (event) => {
    // Define the variables
    let target = event.target
    let x = (parseFloat(target.getAttribute('data-x')) || 0)
    let y = (parseFloat(target.getAttribute('data-y')) || 0)

    // Update the element's style
    target.style.width = event.rect.width + 'px'
    target.style.height = event.rect.height + 'px'

    // Translate when resizing from top or left edges
    x += event.deltaRect.left
    y += event.deltaRect.top

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)'

    // Set the attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

export { renderTaskDragMove, renderResizeMove }
