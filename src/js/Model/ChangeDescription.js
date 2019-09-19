import { state } from '../state'
import { updateState } from '../Controller/changeDescriptionController'


const changeDescription = (event) => {
    // Get the target
    let target = event.target
    // console.log(target.className)

    if (target.className === 'description') {
        // Get the new desciption
        let newDescription = target.value
        let id = target.parentNode.parentNode.id

        // Update the description in state
        updateState(newDescription, id)

        console.log(state.items)
    }
}

export {
    changeDescription
}
