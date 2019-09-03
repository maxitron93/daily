import { state } from '../state'

const updateState = () => {
    console.log('Add code here to adjust state SORTABLE:STOP')
    console.log(state.items)
}

// Ccode to cancel the drag event when a child element is selected
const isPrevented = (element, classesToPrevent) => {
    let currentElem = element;
    let isParent = false;
    
    while (currentElem) {
        const hasClass = Array.from(currentElem.classList).some((cls) => classesToPrevent.includes(cls));
        if (hasClass) {
        isParent = true;
        currentElem = undefined;
        } else {
        currentElem = currentElem.parentElement;
        }
    }
    return isParent;
}

export { updateState, isPrevented }
