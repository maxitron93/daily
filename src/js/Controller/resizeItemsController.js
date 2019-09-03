import { elements } from '../elements'
import { state } from '../state'

const updateContainerWidth = () => {
    // Get new conatiner width
    let newContainerWidth = elements.taskDeadlineContainer.offsetWidth

    // Update state
    state.containerWidth = newContainerWidth
}

export { updateContainerWidth }