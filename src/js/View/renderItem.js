import { elements } from '../elements'
import { state } from '../state'

// {type: 'task', id: 1, xStart: 0, width: 0.1, color: 3}
const renderTask = (item) => {
    // Define HTML
    let html = `
    <div class="item" id="${item.id}">
        <div class="btn-remove"><i class="icon ion-md-close-circle-outline"></i></div>
        <div class="color-picker"></div>
        <div class="description-container">
            <input class="description" type="text">
        </div>
        <div class="task-deadline-container">
            <div 
                class="task item-color-${item.color}" 
                style="transform: translate(${item.xStart * state.containerWidth}px, 0px); width: ${item.width * state.containerWidth}px;"
                data-x="${item.xStart * state.containerWidth}">
            </div>
        </div>
    </div>
    `
    // Render HTML
    elements.itemsContainer.insertAdjacentHTML('beforeend', html)
}

// {type: 'deadline', id: 2, xStart: 0.5, color: 5}
const renderDeadline = (item) => {
    // Define HTML
    let html = `
    <div class="item" id="${item.id}">
        <div class="btn-remove"><i class="icon ion-md-close-circle-outline"></i></div>
        <div class="color-picker"></div>
        <div class="description-container">
            <input class="description" type="text">
        </div>
        <div class="task-deadline-container">
            <div 
                class="deadline item-color-${item.color}"
                style="transform: translate(${item.xStart * state.containerWidth}px, 0px);" 
                data-x="${item.xStart * state.containerWidth}">
            </div>
        </div>
    </div>
    `

    elements.itemsContainer.insertAdjacentHTML('beforeend', html)
}



export { renderTask, renderDeadline }
