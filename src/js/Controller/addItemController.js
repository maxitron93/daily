import { state } from '../state'

const updateState = (type) => {
    let nextId = state.nextId

    if (type === 'task') {
        // Create the new task
        let newTask = {type: 'task', description: '', id: nextId.toString(), xStart: 0, width: 0.2, color: 6}
        
        // Update the state with the new 
        state.items.push(newTask)
        console.log(state.items)

        // Update state.nextId
        state.nextId += 1
        
        // Return the new task
        return newTask
    } else {
        // Create the new deadline
        let newDeadline = {type: 'deadline', description: '', id: nextId.toString(), xStart: 0.2, color: 7}
                
        // Update the state with the new 
        state.items.push(newDeadline)
        console.log(state.items)

        // Update state.nextId
        state.nextId += 1

        // Return the new task
        return newDeadline
    }
}

export { updateState }
