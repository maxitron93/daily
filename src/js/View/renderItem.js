import { elements } from '../elements'
import { state } from '../state'

// {type: 'task', description: '', id: 1, xStart: 0, width: 0.1, color: 3}
const renderTask = (item) => {
    // Define HTML
    let html = `
    <div class="item" id="${item.id}">
        <div class="btn-remove"><i class="icon ion-md-close-circle-outline"></i></div>
        <div class="color-picker">
            <div class="color item-color-1"></div>
            <div class="color item-color-2"></div>
            <div class="color item-color-3"></div>
            <div class="color item-color-4"></div>
            <div class="color item-color-5"></div>
            <div class="color item-color-6"></div>
            <div class="color item-color-7"></div>
            <div class="color item-color-8"></div>
        </div>
        <div class="description-container">
            <input class="description" type="text" value="${item.description}">
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

// {type: 'deadline', description: '', id: 2, xStart: 0.5, color: 5}
const renderDeadline = (item) => {
    // Define HTML
    let html = `
    <div class="item" id="${item.id}">
        <div class="btn-remove"><i class="icon ion-md-close-circle-outline"></i></div>
        <div class="color-picker">
            <div class="color item-color-1"></div>
            <div class="color item-color-2"></div>
            <div class="color item-color-3"></div>
            <div class="color item-color-4"></div>
            <div class="color item-color-5"></div>
            <div class="color item-color-6"></div>
            <div class="color item-color-7"></div>
            <div class="color item-color-8"></div>
        </div>
        <div class="description-container">
            <input class="description" type="text" value="${item.description}">
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
