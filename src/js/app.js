import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
importImages() // Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
import { elements } from './elements'
import { dummyData } from './dummyData'
import { InitialLoad } from './Model/InitialLoad'
import { addTask, addDeadline } from './Model/AddItem'

const initApp = () => {
    // Get data from backend TODO: Update when I hook this up to a backend
    const items = dummyData

    // Perform initial load
    InitialLoad(items)

    // Add event listeners
    elements.addTask.addEventListener('click', addTask)
    elements.addDeadline.addEventListener('click', addDeadline)
}

// Initialize app   
initApp()
