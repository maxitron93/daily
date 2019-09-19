import { getColor, renderNewColor } from '../View/changeColorView'
import { updateItemColor } from '../Controller/changeColorController'
import { updateStorage } from '../Controller/updateStorage';

const changecolor = (event) => {
    // Get target and classes
    let target = event.target
    let classes = target.className.split(' ')

    // Perform function if the target is a color button
    if (classes.includes('color')) {
        // Get the color
        let color = getColor(classes)

        // Update the color in the state
        let id = target.parentNode.parentNode.id
        let type = updateItemColor(id, color)

        // Render the new color in the view
        renderNewColor(id, type, color)

        // Update local storage
        updateStorage()
    }    
}

export { changecolor }