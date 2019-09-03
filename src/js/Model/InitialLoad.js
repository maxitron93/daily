import { SortableItem } from './SortableItem'
import { InteractiveTask } from './InteractiveTask'
import { InteractiveDeadline } from './InteractiveDeadline'
import { initialStateUpdate } from '../Controller/initialLoadController'
import { removeLoader, renderContent, loadInItemsFromState, removeEmptyItem } from '../View/initialLoadView'
import { state } from '../state'

const InitialLoad = (items) => {
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
        console.log(state)
    }

    // TODO: Update when I hook this up to a backend
    setTimeout(tempFunc, 100)
}

export { InitialLoad }
