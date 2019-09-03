import { state } from '../state'

const updateState = (target) => {
	console.log('Add code here to update state DEADLINE DRAG ONEND')
    console.log(`x-start: ${target.getAttribute('data-x')}`)
    console.log(state)
}

export { updateState }
