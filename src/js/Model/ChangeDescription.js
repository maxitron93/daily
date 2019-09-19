import { updateState } from '../Controller/changeDescriptionController'
import { updateStorage } from '../Controller/updateStorage';


const changeDescription = (event) => {
    // Get the target
    let target = event.target

    if (target.className === 'description') {
        // Get the new desciption
        let newDescription = target.value
        let id = target.parentNode.parentNode.id

        // Update the description in state
        updateState(newDescription, id)

        // Update local storage
        updateStorage()
    }
}

export {
    changeDescription
}
