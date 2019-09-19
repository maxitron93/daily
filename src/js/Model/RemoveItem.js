import { checkNumItems, updateState } from '../Controller/removeItemController'
import { removeItemFromUI } from '../View/removeItemView'
import { state } from '../state'

const removeItem = (event) => {
    // Get target and classes
    let target = event.target
    let classes = target.className.split(' ')
    
    // Perform function if the target is the remove button
    if (classes.includes('ion-md-close-circle-outline')) {
        // Check if there is at least one item
        let minItems = checkNumItems() 
        
        // If there is at least on item, remove the selected item from the UI
        if (minItems) {
            let id = target.parentNode.parentNode.id 
            removeItemFromUI(id)

            // Update the state
            updateState(id)
        }
    
        console.log(state.items)
    }
}

export { removeItem }
