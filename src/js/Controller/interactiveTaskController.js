import { state } from '../state'

const updateState = (target) => {
	console.log('Add code here to update state')
	console.log(`x-start: ${target.getAttribute('data-x')}`)
	console.log(`width: ${target.offsetWidth}`)
    console.log(document.querySelector('.task-deadline-container').offsetWidth)
    console.log(state.items)
}

export { updateState }
