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
import { openStartTimeList, closeStartTimeList, selectStartTime } from './Model/StartTimeSelector'
import { openEndTimeList, closeEndTimeList, selectEndTime } from './Model/EndTimeSelector'
import { adjustStartTime } from './Model/AdjustStartTime'
import { adjustEndTime } from './Model/AdjustEndTime'


const initApp = () => {
    // Get data from backend TODO: Update when I hook this up to a backend
    const items = dummyData

    // Perform initial load
    InitialLoad(items)

    // Add event listeners
    elements.addTask.addEventListener('click', addTask)
    elements.addDeadline.addEventListener('click', addDeadline)
    elements.itemsContainer.addEventListener('click', removeItem)
    elements.itemsContainer.addEventListener('click', changecolor)
    window.addEventListener('resize', resizeItems)

    // For changing start time
    elements.startTimeButton.addEventListener('click', openStartTimeList)
    document.addEventListener('click', closeStartTimeList)  
    elements.startTimeList.addEventListener('click', selectStartTime)

    // For changing end time
    elements.endTimeButton.addEventListener('click', openEndTimeList)
    document.addEventListener('click', closeEndTimeList)
    elements.endTimeList.addEventListener('click', selectEndTime)

    // For changing start time
    elements.increaseStartTime.addEventListener('click', adjustStartTime)
    elements.decreaseStartTime.addEventListener('click', adjustStartTime)
    elements.decreaseEndTime.addEventListener('click', adjustEndTime)
    elements.increaseEndTime.addEventListener('click', adjustEndTime)

    // For changing end time
}

// Initialize app   
initApp()
console.log(elements.taskDeadlineContainer.offsetWidth)
