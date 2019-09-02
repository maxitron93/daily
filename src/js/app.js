import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { initSortableItems } from './Controller/sortableItemController'
import { importImages } from './importImages'
import { elements } from './elements'
import { initInteractiveTasks } from './Controller/interactiveTaskController'
import { initInteractiveDeadlines } from './Controller/interactiveDeadlineController'

// Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
importImages()

// Initialize interactive objects
initSortableItems()
initInteractiveTasks()
initInteractiveDeadlines()

// Initialize app
const initApp = () => {
    // Get data
}