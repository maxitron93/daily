import { SortableItem } from './SortableItem'
import { InteractiveTask } from './InteractiveTask'
import { InteractiveDeadline } from './InteractiveDeadline'
import { initialStateUpdate } from '../Controller/initialLoadController'
import { loadInTimeDivsFromState, loadInItemsFromState, removeLoader, renderContent, loadInStartTime, loadInEndTime, renderDate } from '../View/initialLoadView'
import { state } from '../state'

const InitialLoad = (data) => {
    // TODO: Update when I hook this up to a backend
    const tempFunc = () => {
        // Update state from incoming data
        initialStateUpdate(data)

        // Render time divs from state
        loadInTimeDivsFromState(state.times)

        // Render start time on start time button
        loadInStartTime(state.times.start)

        // Render start time on start time button
        loadInEndTime(state.times.end)

        // Render items from state
        loadInItemsFromState(data.items)

        // Render today's date
        renderDate()

        // Remove loader from UI
        removeLoader()

        // Change opacity of content from 0 to 1
        renderContent()

        // Initialize interactive objects
        SortableItem()
        InteractiveTask()
        InteractiveDeadline()
    }

    // TODO: Update when I hook this up to a backend
    setTimeout(tempFunc, 183)
}

export { InitialLoad }
