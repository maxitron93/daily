import { Sortable } from '@shopify/draggable';
// To enable the swap animation
import { Plugins } from '@shopify/draggable';
import { elements } from '../elements'

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
    });
    
    return(sortableItem)
}

export { SortableItem }
