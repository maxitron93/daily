import { state } from '../state'

const updateEndTime = (newEndTime) => {
    // Update the end time state
    state.times.end = parseInt(newEndTime)
}

const updateItemWidths = (newEndTime) => {
    // Get the values needed to calculate new starting positions
    let oldNumHours = state.times.end - state.times.start
    let newNumHours = parseInt(newEndTime) - state.times.start

    // Update the items
    let updatedItems = state.items.map((item, index, array) => {
        if (item.type === 'task') {
            // Calculate new width
            item.width = (item.width * oldNumHours) / newNumHours

            // If the task goes past the last hour marker, make it stop at the last hour marker
            if (item.width + item.xStart > 1) {
                item.width = 1 - item.xStart
            }

            // Return the updated task
            return item
        } else {

            // Return the deadline
            return item
        }
    })

    // Update the state
    state.items = updatedItems
}

const updateStartingPosition = (newEndTime) => {
    // Get the values needed to calculate new starting positions
    let oldNumHours = state.times.end - state.times.start
    let newNumHours = parseInt(newEndTime) - state.times.start

    // Update items
    let updatedItems = state.items.map((item, index, array) => {
        // Calculate new starting position
        item.xStart = (item.xStart * oldNumHours) / newNumHours

        // If the width is less that 15 minutes, make the task 15 minutes long
        if (item.xStart > 1 - ((1 / newNumHours) / 4)) {
            if (item.type === 'deadline') {
                item.xStart = 1
            } else {
                item.xStart = 1 - ((1 / newNumHours) / 4)
                console.log(item.xStart)
                item.width = (1 / newNumHours) / 4
            }
        }

        // If the task goes past the last hour marker, make it stop at the last hour marker
        if (item.width + item.xStart > 1) {
            item.width = 1 - item.xStart
        }

        // Return the updated task
        return item
        
    })
}

export { 
    updateEndTime, 
    updateItemWidths, 
    updateStartingPosition 
}
