import { SortableItem } from './SortableItem'
import { InteractiveTask } from './InteractiveTask'
import { InteractiveDeadline } from './InteractiveDeadline'
import { initialStateUpdate } from '../Controller/initAppController'
import { removeLoader, renderContent, loadInItemsFromState, removeEmptyItem } from '../View/initAppView'
import { dummyData } from '../dummyData'

const initApp = () => {
    // Get data from backend TODO: Update when I hook this up to a backend
    const items = dummyData
    
    // TODO: Update when I hook this up to a backend
    const tempFunc = () => {
        // Update state from incoming data
        initialStateUpdate(items)

        // Render items from state
        loadInItemsFromState(items)

        // Remove empty item
        removeEmptyItem()

        // Remove loader from UI
        removeLoader()

        // Render content onto UI
        renderContent()

        // Initialize interactive objects
        SortableItem()
        InteractiveTask()
        InteractiveDeadline()
    }

    // TODO: Update when I hook this up to a backend
    setTimeout(tempFunc, 2000)
    
}

export { initApp }
