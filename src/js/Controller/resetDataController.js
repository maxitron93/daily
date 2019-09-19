import swal from 'sweetalert';
import { state } from '../state'
import { defaultData } from '../defaultData'

const getConfirmation = () => {
    // Show confirmation message
    let confirmReset = swal({
        title: "Are you sure?",
        text: "Are you sure that you want to reset all data?",
        icon: "warning",
        buttons: true,
        dangerMode: true
    })

    return confirmReset
}

const resetState = () => {
    state.items = defaultData.items
    state.times = defaultData.times
    state.nextId = defaultData.nextId
}

export {
    getConfirmation,
    resetState
}
