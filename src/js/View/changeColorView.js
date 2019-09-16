import { elements } from '../elements'

const getColor = (classes) => {
    return classes[1]
}

const renderNewColor = (id, type, color) => {
    // Get the item
    let item = document.getElementById(id)

    // Update className
    item.querySelector(`.${type}`).className = `${type} ${color}`
}

export { getColor, renderNewColor }