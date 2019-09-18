const adjustEndTime = (event) => {
    // Get the end time
    // newEndTime = getEndTime(target)

    // Get the button clicked
    let target = event.target

    console.log(target.className.split(' ')[1])
}

export { adjustEndTime }
