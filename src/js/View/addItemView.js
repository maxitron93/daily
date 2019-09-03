import { renderTask, renderDeadline } from './renderItem'

const renderAddTask = (task) => {
    renderTask(task)
}

const renderAddDeadline = (task) => {
    renderDeadline(task)
}

export { renderAddTask, renderAddDeadline }
