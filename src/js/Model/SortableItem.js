import { Sortable } from '@shopify/draggable';
// To enable the swap animation
import { Plugins } from '@shopify/draggable';
import { elements } from '../elements'
import { hideItem } from '../View/sortableItemView'
import { updateState, isPrevented } from '../Controller/sortableItemController';

// Initialize sortable items
const SortableItem = () => {
	const sortableItem = new Sortable(elements.itemsContainer, {
		draggable: '.item',
		
		// Start of additional code to enable animation on sortable:sorted
		swapAnimation: {
			duration: 200,
			easingFunction: 'ease-in-out',
		},
		plugins: [Plugins.SwapAnimation]
		// End of additional code to enable animation on sortable:sorted
	})

	// Hide item that is selected upon selection
	sortableItem.on('sortable:sort', (event) => {
        // Get the item
        const item = event.data.dragEvent.data.source
        
        // Hide the item
        hideItem(item)
	})
	
	// Update the state after the item has been sorted
	sortableItem.on('sortable:stop', (event) => {
        updateState()
	});
	
	// Cancel the drag event when a child element is selected
	sortableItem.on('drag:start', (event) => {
		// Get the element that was selected
        const selectedElement = event.originalEvent.target;
		
		// If the selected element has any of those classes, cancel the drag event
        if (isPrevented(selectedElement, ['btn-remove', 'color-picker', 'description','task', 'deadline'])) {
            event.cancel();
    }
    });
}

export { SortableItem }
