import { state } from '../state'

const updateStartTime = (newStartTime) => {
    // Update the start time state
    state.times.start = parseInt(newStartTime)
}

const updateStartingPosition = (newStartTime) => {
    // Get the values needed to calculate new starting positions
    let oldNumHours = state.times.end - state.times.start
    let newNumHours = state.times.end - parseInt(newStartTime)
    let numHoursChange = newNumHours - oldNumHours

    // Update the items
    let updatedItems = state.items.map((item, index, array) => {
        // Calculate new starting position
        item.xStart = (item.xStart * oldNumHours + numHoursChange) / newNumHours

        // Make starting position 0 if it's less than zero
        if (item.xStart < 0) {
            // Update the item width
            item.width = item.width + item.xStart

            // If the task totally dissapears, change the width to 1 hour
            if (item.width < 0) {
                item.width = 1 / newNumHours
            }

            // Update the item starting position
            item.xStart = 0
        }

        // Return the updated item
        return item
    })

    // Update the state
    state.items = updatedItems
}

const updateItemWidths = (newStartTime) => {
    // Get the values needed to calculate new item widths
    let oldNumHours = state.times.end - state.times.start
    let newNumHours = state.times.end - parseInt(newStartTime)

    // Update the items
    let updatedItems = state.items.map((item, index, array) => {
        if (item.type === 'task') {
            // Calculate new item width
            item.width = item.width * oldNumHours / newNumHours

            // Return the updated item
            return item
        } else {
            return item
        }
    })

    // Update the state
    state.items = updatedItems
}

export { updateStartTime, updateStartingPosition, updateItemWidths }
