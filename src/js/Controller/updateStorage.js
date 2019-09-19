import { state } from '../state'

const updateStorage = () => {
    window.localStorage.setItem('appData', JSON.stringify(state))
    console.log('Local Storage Updated')
}

export {
    updateStorage
}
