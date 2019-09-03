import { state } from '../state'
import { elements } from '../elements'

const updateState = () => {
    // Need to pause a little to let the DOM update
    setTimeout(() => {
        // Get the items
        let items = Array.from(elements.itemsContainer.children)
        
        
        // Create temporary array
        let newItemsOrder = []

        // Place the items in the new order into the array
        items.forEach((newItem, index, array) => {
            state.items.forEach((item, index, array) => {
                if (item.id === newItem.id) {
                    newItemsOrder.push(item)
                }
            })
        })

        // Update the state
        state.items = newItemsOrder

        console.log('State updated with new order of items')
        console.log(state.items)
    }, 200)
}

// Ccode to cancel the drag event when a child element is selected
const isPrevented = (element, classesToPrevent) => {
    let currentElem = element;
    let isParent = false;
    
    while (currentElem) {
        const hasClass = Array.from(currentElem.classList).some((cls) => classesToPrevent.includes(cls));
        if (hasClass) {
        isParent = true;
        currentElem = undefined;
        } else {
        currentElem = currentElem.parentElement;
        }
    }
    return isParent;
}

export { updateState, isPrevented }
