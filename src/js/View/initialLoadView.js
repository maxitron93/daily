import { elements } from '../elements'
import { renderTask, renderDeadline } from './renderItem'

const removeLoader = () => {
    elements.loader.style.display = 'none'
}

const renderContent = () => {
    elements.loadedContent.style.opacity = '1'
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

const removeEmptyItem = () => {
    elements.emptyItem.style.display = 'none'
}

// {type: 'task', id: 1, xStart: 0, width: 0.1, color: 3}
export { removeLoader, renderContent, loadInItemsFromState, removeEmptyItem }
