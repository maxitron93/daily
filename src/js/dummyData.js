const dummyData = {
    containerWidth: null,
    times: {
        start: 8,
        end: 20
    },
    items: [
        {type: 'task', description: 'First Task', id: '1', xStart: 0, width: 0.2, color: 3},
        {type: 'task', description: 'Second Task', id: '2', xStart: 0, width: 0.2, color: 3},
        {type: 'task', description: 'Third Task', id: '3', xStart: 0, width: 0.2, color: 3},
        {type: 'deadline', description: 'First Deadline', id: '4', xStart: 0.2, color: 7},
    ],
    nextId: 5
}

export { dummyData }
