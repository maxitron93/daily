import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import interact from 'interactjs';
import { initSortableItems } from './Controller/sortableItemController'
import { importImages } from './importImages'
import { elements } from './elements'
import { initInteractiveTasks } from './Controller/interactiveTaskController'
import { initInteractiveDeadlines } from './Controller/interactiveDeadlineController'

// Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
importImages()

// Initialize sortable items
initSortableItems()

// Initialize interactive tasks
initInteractiveTasks()

// Initialize interactive deadlines
initInteractiveDeadlines()
