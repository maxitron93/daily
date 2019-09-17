import { state } from '../state'
import { renderUpdatedItem } from './renderUpdatedItem'

const renderUpdatedItems = () => {
    // Render the updated position and dimention for each item
    state.items.forEach((item, array, index) => {
        renderUpdatedItem(item)
    })
}

export { renderUpdatedItems }

// {type: 'task', description: '', id: '1', xStart: 0, width: 0.2, color: 3},
// {type: 'deadline', description: '', id: '10', xStart: 0.18, color: 5},
