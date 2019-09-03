import { updateState } from '../Controller/addItemController'
import { renderAddTask, renderAddDeadline } from '../View/addItemView'

const addTask = () => {
    // Update the state with a new item
    let item = updateState('task')

    // Render the new 
    renderAddTask(item)
}

const addDeadline = () => {
    // Update the state with a new item
    let item = updateState('deadline')

    // Render the new 
    renderAddDeadline(item)
}

export { addTask, addDeadline }
