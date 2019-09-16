import { state } from '../state'

const updateItemColor = (id, color) => {
    let type = ''
    let updatedItems = state.items.map((item, index, array) => {
        if(item.id === id) {
            // Get the color number
            let colorNumber = color.split('-')[2]

            // Update the color number
            item.color = parseInt(colorNumber)

            // Update the type placeholder
            type = item.type
        }
        return item
    })

    // Update the state
    state.items = updatedItems

    // Return the type
    return type
}

export { updateItemColor }
