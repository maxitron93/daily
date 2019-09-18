const adjustStartTime = (event) => {
    // Get the start time
    // newStartTime = getStartTime(target)

    // Get the button clicked
    let target = event.target

    console.log(target.className.split(' ')[1])
}

export { adjustStartTime }
