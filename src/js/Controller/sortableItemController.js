import { state } from '../state'
import { SortableItem } from '../Model/SortableItem'
import { hideItem } from '../View/sortableItemView'

const initSortableItems = () => {
    // Create the sortable items
    const sortableItem = SortableItem()

    // Hide item that is selected upon selection
    sortableItem.on('sortable:sort', (event) => {
        // Get the item
        const item = event.data.dragEvent.data.source
        
        // Hide the item
        hideItem(item)
    });

    // Update the state after the item has been sorted
    sortableItem.on('sortable:stop', (event) => {
        console.log('Add code here to adjust state SORTABLE:STOP')
        console.log(state.items)
    });

    // Start of code to cancel the drag event when a child element is selected
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
    
    sortableItem.on('drag:start', (event) => {
        const currentTarget = event.originalEvent.target;
        
        if (isPrevented(currentTarget, ['btn-remove', 'color-picker', 'description','task', 'deadline'])) {
            event.cancel();
    }
    });
    // End of code to cancel the drag event when a child element is selected
}

export { initSortableItems }
