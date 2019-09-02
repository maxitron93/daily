import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { initSortableItems } from './Controller/sortableItemController'
import { importImages } from './importImages'
import { elements } from './elements'
import { initInteractiveTasks } from './Controller/interactiveTaskController'
import { initInteractiveDeadlines } from './Controller/interactiveDeadlineController'
import { dummyData } from './dummyData'
import { initialStateUpdate } from './Controller/initAppController'
import { removeLoader, renderContent, loadInItemsFromState, removeEmptyItem } from './View/initAppView'
importImages() // Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building

// Function to initialize app
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
        initSortableItems()
        initInteractiveTasks()
        initInteractiveDeadlines()
    }

    // TODO: Update when I hook this up to a backend
    setTimeout(tempFunc, 2000)
    
}

// Initialize app
initApp()
