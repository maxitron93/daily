const removeItemFromUI = (id) => {
    // Select the element
    let item = document.getElementById(id)

    // Remove the item from the UI
    item.parentNode.removeChild(item)
}

export { removeItemFromUI }
