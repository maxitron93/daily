import { elements } from '../elements'
import { renderTask, renderDeadline } from './renderItem'
import { renderTimeDivs } from './renderTimeDivs'

const loadInTimeDivsFromState = (times) => {
    // Render time divs
    renderTimeDivs(times)
}

const loadInItemsFromState = (items) => {
    items.forEach((item, index, array) => {
        if (item.type === 'task') {
            renderTask(item)
        } else {
            renderDeadline(item)
        }
    })
}

const removeLoader = () => {
    elements.loader.style.display = 'none'
}

const renderContent = () => {
    elements.loadedContent.style.opacity = '1'
}

// {type: 'task', id: 1, xStart: 0, width: 0.1, color: 3}
export { loadInTimeDivsFromState, loadInItemsFromState, removeLoader, renderContent }
