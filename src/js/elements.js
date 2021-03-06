const elements = {
    loader: document.querySelector('.loader'),
    date: document.querySelector('.label-date'),
    day: document.querySelector('.content-date'),
    startTime: document.querySelector('.content-info__start'),
    increaseStartTime: document.querySelector('.btn-inc-start'),
    decreaseStartTime: document.querySelector('.btn-dec-start'),
    endTime: document.querySelector('.content-info__end'),
    increaseEndTime: document.querySelector('.btn-inc-end'),
    decreaseEndTime: document.querySelector('.btn-dec-end'),
    resetButton: document.querySelector('.btn-reset'),
    timesContainer: document.querySelector('.times-container'),
    itemsContainer: document.querySelector('.items-container'),
    loadedContent: document.querySelector('.loaded-content'),
    emptyItem: document.querySelector('.empty-item'),
    taskDeadlineContainer: document.querySelector('.task-deadline-container'),
    addTask: document.querySelector('.btn-add-task'),
    addDeadline: document.querySelector('.btn-add-deadline')
}

export { elements }
