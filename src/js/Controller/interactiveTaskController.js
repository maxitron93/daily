import { InteractiveTask } from '../Model/InteractiveTask'

const initInteractiveTasks = () => {   

    // Define functionality on resize or move
    InteractiveTask().on('resizemove', (event) => {
        let target = event.target
        let x = (parseFloat(target.getAttribute('data-x')) || 0)
        let y = (parseFloat(target.getAttribute('data-y')) || 0)
    
        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'
    
        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top
    
        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)'
    
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
    })
}

export { initInteractiveTasks }
