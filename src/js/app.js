import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
importImages() // Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
import { elements } from './elements'
import { dummyData } from './dummyData'
import { InitialLoad } from './Model/InitialLoad'
import { addTask, addDeadline } from './Model/AddItem'
import { removeItem } from './Model/RemoveItem'
import { resizeItems } from './Model/ResizeItems'
import { changecolor } from './Model/ChangeColor'
import { adjustStartTime } from './Model/AdjustStartTime'
import { adjustEndTime } from './Model/AdjustEndTime'
import { changeDescription } from './Model/ChangeDescription'


const initApp = () => {
    // Get data from backend TODO: Update when I hook this up to a backend
    const data = JSON.parse(window.localStorage.getItem('appData')) || dummyData

    // Perform initial load
    InitialLoad(data)

    // Add event listeners
    elements.addTask.addEventListener('click', addTask)
    elements.addDeadline.addEventListener('click', addDeadline)
    elements.itemsContainer.addEventListener('click', removeItem)
    elements.itemsContainer.addEventListener('click', changecolor)
    elements.itemsContainer.addEventListener('change', changeDescription)


    // For changing start time
    elements.increaseStartTime.addEventListener('click', adjustStartTime)
    elements.decreaseStartTime.addEventListener('click', adjustStartTime)

    // For changing end time
    elements.decreaseEndTime.addEventListener('click', adjustEndTime)
    elements.increaseEndTime.addEventListener('click', adjustEndTime)

    // For updating item positions and widths if the screen gets resized
    window.addEventListener('resize', resizeItems)
}

// Initialize app   
initApp()
