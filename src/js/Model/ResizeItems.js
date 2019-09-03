import { updateContainerWidth } from '../Controller/resizeItemsController'
import { renderUpdatedItems } from '../View/resizeItemsView'

const resizeItems = () => {
    // Update container width state
    updateContainerWidth()
    
    // Render updated items
    renderUpdatedItems()
}

export { resizeItems }
