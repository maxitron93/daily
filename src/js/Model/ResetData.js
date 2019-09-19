import { updateStorage } from '../Controller/updateStorage';
import { getConfirmation } from '../Controller/resetDataController'
import { resetState } from '../Controller/resetDataController'

const resetData = async () => {
    // Get confirmation
    let confirmReset = await getConfirmation()

    if (confirmReset) {
        // Reset the state
        resetState()

        // Update local storage
        updateStorage()

        // Refresh the page
        location.reload()
    }
}

export { resetData }
