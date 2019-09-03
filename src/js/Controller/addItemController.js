import { state } from '../state'

const updateState = (type) => {
    if (type === 'task') {
        console.log('Add Task')
        console.log(state.items)
        return {type: 'task', id: 1, xStart: 0.1, width: 0.4, color: 3}
    } else {

        console.log('Add Deadline')
        console.log(state.items)
        return {type: 'deadline', id: 2, xStart: 0.5, color: 5}
    }
}

export { updateState }
